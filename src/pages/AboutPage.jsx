import "../assets/css/About.css";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <section className="section markets-container-section">
        <div className="container">
          <div className="cotainer_about_side">
            <div className="left_side_banner">
              <p className="about_content_text">About FindMarket</p>
              <h2 className="about_content_header">Fresh markets, near you.</h2>
              <p className="about_content_desc">
                FindMarket is a free service that helps you discover farmers'
                markets, food stalls, and community bazaars within walking or
                cycling distance of your front door.
              </p>
            </div>
            <div className="right_side_banner">
              <Link className="right_side_link" to="/contact">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="Container_about_us">
            <div className="left_bar">
              <img
                className="left_bar_img"
                src="/images/market_about_us.jpg"
                alt=""
              />
            </div>
            <div className="right_Bar">
              <p className="text_our_story">Our Story</p>
              <h2 className="header_our_story">
                Started at a Saturday market in 2021
              </h2>
              <div className="descriptions_our_story">
                <p className="descriptions_content">
                  Amara and Tomás met at their neighborhood market in East
                  Portland, bonding over the fact that neither of them had known
                  the market existed until a neighbor mentioned it offhandedly.
                  It had been running for eleven years.
                </p>
                <p className="descriptions_content">
                  They started building FindMarket the following weekend — a
                  simple map that listed every verified market within five
                  miles. Word spread fast. By spring 2022, the platform covered
                  14 cities and 340 markets.
                </p>
                <p className="descriptions_content">
                  Today FindMarket lists over 4,200 markets across North
                  America, all verified by our community team and updated
                  weekly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
