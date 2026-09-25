import "../assets/css/Contact.css";

function ContactPage() {
  return (
    <>
      <section className="section markets-container-section">
        <div className="container">
          <div className="contact_container">
            <div className="sub_containt">
              <p className="contact_content">Contact Us</p>
              <h1 className="contact_header">Let's Talk Markets</h1>
              <p className="contact_desc">
                Whether you run a market, have a question, or just want to say
                hello — we respond to every message within one business day.
              </p>
            </div>
          </div>
          <div className="form_container">
            <div className="form_container_left">
              <h3 className="header_text">Get in touch</h3>
              <p className="header_desc">
                Our community team is based in Portland, Oregon. We're small but
                mighty — and we genuinely love hearing from market enthusiasts.
              </p>
              <div className="address_container_list">
                <div className="address_contaner_item">
                  <h4>Address:</h4>
                  <p>1420 SE Morrison St, Portland, OR 97214</p>
                </div>
                <div className="address_contaner_item">
                  <h4>Phone:</h4>
                  <p>+1 (503) 884-2240</p>
                </div>
                <div className="address_contaner_item">
                  <h4>Email:</h4>
                  <p>hello@findmarket.co</p>
                </div>
                <div className="address_contaner_item">
                  <h4>Hours:</h4>
                  <p>Mon – Fri, 9 AM – 6 PM</p>
                </div>
              </div>
              <div className="fast_track_container">
                <h5>Vendor fast track</h5>
                <p>
                  Market operators get priority replies. Select "List a new
                  market" in the form and we'll respond within 4 hours during
                  business days.
                </p>
              </div>
            </div>
            <div className="form_container_right">
              <form action="" className="form_action">
                <div className="form_contain">
                  <div className="form_left">
                    <div className="form_item">
                      <p className="form_label">
                        <label htmlFor="name">Full Name *</label>
                      </p>
                      <input
                        type="text"
                        id="name"
                        className="form_input"
                        placeholder="Enter your name..."
                      />
                    </div>
                  </div>
                  <div className="form_right">
                    <div className="form_item">
                      <p className="form_label">
                        <label htmlFor="email">Email Address *</label>
                      </p>
                      <input
                        type="text"
                        id="email"
                        className="form_input"
                        placeholder="Enter your email..."
                      />
                    </div>
                  </div>
                </div>
                <div className="form_item">
                  <p className="form_label">
                    <label htmlFor="email">Reason for contact *</label>
                  </p>
                  <input
                    type="text"
                    id="email"
                    className="form_input"
                    placeholder="Select a reason"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
