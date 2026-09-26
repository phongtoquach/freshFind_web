import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/css/market_details_page.css";
import MapLocation from "../components/MapLocation";
import { getMarketByIdOrSlug } from "../services/marketService";
import productsData from "../data/products.json";
import BookmarkContext from "../context/BookmarkContext";
import NoteContext from "../context/NoteContext";
import Modal from "../components/Modal";

const DAYS_OF_WEEK = [
  { key: "mon", label: "Monday", dayIndex: 1 },
  { key: "tue", label: "Tuesday", dayIndex: 2 },
  { key: "wed", label: "Wednesday", dayIndex: 3 },
  { key: "thu", label: "Thursday", dayIndex: 4 },
  { key: "fri", label: "Friday", dayIndex: 5 },
  { key: "sat", label: "Saturday", dayIndex: 6 },
  { key: "sun", label: "Sunday", dayIndex: 0 },
];

// Helper: So sánh giờ "HH:MM" - trả về true nếu time1 < time2
const isTimeBefore = (time1, time2) => {
  if (!time1 || !time2) return false;
  return time1.localeCompare(time2) < 0;
};

// Helper: Lấy giờ hiện tại dạng "HH:MM"
const getCurrentTimeString = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

function MarketDetailsPage() {
  const { toggleBookmark, isBookmarked } = useContext(BookmarkContext);
  const { getNotesByMarketId, addNote, deleteNote } = useContext(NoteContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newNoteText, setNewNoteText] = useState("");

  const { marketId, marketSlug } = useParams();
  const foundMarket = getMarketByIdOrSlug(marketId || marketSlug);

  const market = foundMarket;
  const marketIdNum = Number(market?.id);
  const bookmarked = isBookmarked(marketIdNum);

  const todayDayIndex = new Date().getDay();
  const todayKey = DAYS_OF_WEEK.find((d) => d.dayIndex === todayDayIndex)?.key;
  const todaySchedule = Array.isArray(market.schedule)
    ? market.schedule.find((s) => s.day === todayKey)
    : null;

  // Kiểm tra hôm nay có mở KHÔNG và đã hết giờ chưa
  const currentTime = getCurrentTimeString();
  const isWithinOpenHours =
    todaySchedule?.open === true &&
    todaySchedule?.hours?.start &&
    todaySchedule?.hours?.end &&
    !isTimeBefore(currentTime, todaySchedule.hours.start) && // Giờ hiện tại >= giờ mở
    isTimeBefore(currentTime, todaySchedule.hours.end); // Giờ hiện tại < giờ đóng

  // Tìm ngày mở tiếp theo SAU hôm nay (loop qua tuần)
  const getNextOpenDay = () => {
    if (!Array.isArray(market.schedule) || market.schedule.length === 0) {
      return null;
    }

    // Bắt đầu từ ngày mai (todayDayIndex + 1)
    for (let i = 1; i <= 7; i++) {
      const nextDayIndex = (todayDayIndex + i) % 7;
      const nextDay = DAYS_OF_WEEK.find((d) => d.dayIndex === nextDayIndex);
      const schedule = market.schedule.find((s) => s.day === nextDay?.key);

      if (schedule?.open === true) {
        return { day: nextDay, schedule };
      }
    }

    return null; // Không có ngày mở nào trong tuần
  };

  const nextOpenSchedule = getNextOpenDay();

  const availableProduce = (market.productIds || [])
    .map((pid) => productsData.find((p) => p.id === pid)?.name)
    .filter(Boolean);

  const produceListToDisplay =
    availableProduce.length > 0
      ? availableProduce
      : ["Apples", "Tomatoes", "Strawberries", "Carrots", "Basil", "Spinach"];

  return (
    <>
      <section className="section markets-container-section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link to="/markets">Markets</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">{market.name}</span>
          </nav>
          <div className="container_market_detail">
            <div className="main_container">
              <div className="left_container">
                <img
                  className="left_img"
                  src={
                    Array.isArray(market.images) && market.images.length > 0
                      ? market.images[0]
                      : "/images/test123.avif"
                  }
                  alt={market.name}
                />
              </div>
              <div className="right_container">
                <div className="right_header_containt">
                  <h1 className="right_header">{market.name}</h1>
                  <div className="button_container">
                    <button
                      className={`right_header_btn ${bookmarked ? "actived" : ""}`}
                      onClick={() => toggleBookmark(marketIdNum)}
                    >
                      Bookmark
                    </button>
                    {bookmarked && (
                      <button className="note_btn" onClick={() => setIsModalOpen(true)}>
                        <img className="note_btn_img" src="/images/notes.png" alt="" />
                        Note
                      </button>
                    )}
                  </div>
                </div>
                <p className="right_address">
                  <span className="right_icons">
                    <img className="icons" src="/images/location.png" alt="" />
                  </span>
                  {market.location?.area} - {market.location?.address}
                </p>
                <p className="right_time_open">
                  {isWithinOpenHours ? (
                    <>
                      <span
                        className="status_badge"
                        style={{ color: "#3a7d44" }}
                      >
                        Open
                      </span>{" "}
                      Closes at {todaySchedule?.hours?.end}
                    </>
                  ) : nextOpenSchedule ? (
                    <>
                      <span className="status_badge">Closed</span> Opens{" "}
                      {nextOpenSchedule.day?.label} at{" "}
                      {nextOpenSchedule.schedule?.hours?.start}
                    </>
                  ) : (
                    <span className="status_badge">Closed</span>
                  )}
                </p>
                <h2 className="right_desc_header">About This Market</h2>
                <p className="right_desc_content">{market.description}</p>
                <h3 className="product_available">Available Produce</h3>
                <ul className="products_list">
                  {produceListToDisplay.map((produceName) => (
                    <li key={produceName} className="product_item">
                      {produceName}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="time_open_week_container">
              <div className="time_open_week">
                <h4>Opening Hours</h4>
                <ul className="open_in_week_list">
                  {DAYS_OF_WEEK.map((day) => {
                    const sched = Array.isArray(market.schedule)
                      ? market.schedule.find((s) => s.day === day.key)
                      : null;
                    const isOpen = sched?.open === true;
                    const isToday = day.dayIndex === todayDayIndex;

                    return (
                      <li
                        key={day.key}
                        className={`open_in_week_item ${isToday ? "actived" : ""}`}
                      >
                        <span className="open_in_week_item_header">
                          {day.label}
                        </span>
                        <span
                          className={`open_in_week_item_status ${isOpen ? "open" : "closed"
                            }`}
                        >
                          {isOpen && sched?.hours
                            ? `${sched.hours.start} - ${sched.hours.end}`
                            : "Closed"}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="maps_container">
                <MapLocation
                  position={[
                    market.location?.latitude || 10.765,
                    market.location?.longitude || 106.695,
                  ]}
                  zoom={15}
                  height="500px"
                  popupText={market.name}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal_container">
          <h2 className="modal_header">Your Favorite Market Notes</h2>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (newNoteText.trim()) {
                addNote(marketIdNum, newNoteText);
                setNewNoteText("");
              }
            }}
          >
            <input 
              className="modal_input" 
              type="text" 
              placeholder="Write some things..." 
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)}
            />
          </form>

          <div className="your_note_here_container">
            {getNotesByMarketId(marketIdNum).length === 0 ? (
              <p className="place_holder_modal">Your notes will appear here.</p>
            ) : (
              <ul className="note_list">
                {getNotesByMarketId(marketIdNum).map((note) => (
                  <li key={note.id} className="note_item">
                    <span className="note_item_text">{note.text}</span>
                    <button 
                      className="note_item_button_x"
                      onClick={() => deleteNote(marketIdNum, note.id)}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default MarketDetailsPage;
