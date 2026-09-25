import { useState } from "react";
import "../assets/css/Contact.css";
import MapLocation from "../components/MapLocation";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const REASON_OPTIONS = [
  { value: "1", label: "List a new market" },
  { value: "2", label: "Update market information" },
  { value: "3", label: "Report an issue" },
  { value: "4", label: "Partnership inquiry" },
  { value: "5", label: "Press & media" },
  { value: "6", label: "General question" },
];

const INITIAL_VALUES = {
  name: "",
  email: "",
  reason: "",
  message: "",
};

function validateField(field, value) {
  switch (field) {
    case "name":
      if (!value.trim()) return "Full name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      return "";
    case "email":
      if (!value.trim()) return "Email address is required.";
      if (!EMAIL_RE.test(value.trim()))
        return "Please enter a valid email address.";
      return "";
    case "reason":
      if (!value) return "Please select a reason for contacting us.";
      return "";
    case "message":
      if (!value.trim()) return "Message is required.";
      if (value.trim().length < 10)
        return "Message must be at least 10 characters.";
      return "";
    default:
      return "";
  }
}

function validateAll(values) {
  const errors = {};
  Object.keys(INITIAL_VALUES).forEach((field) => {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  });
  return errors;
}

function withFieldError(prevErrors, field, message) {
  const hasMessage = Boolean(message);
  const hadMessage = Boolean(prevErrors[field]);
  if (!hasMessage && !hadMessage) return prevErrors;

  const next = { ...prevErrors };
  if (hasMessage) next[field] = message;
  else delete next[field];
  return next;
}

function ContactPage() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) =>
        withFieldError(prev, name, validateField(name, value)),
      );
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => withFieldError(prev, name, validateField(name, value)));
  }

  function handleFocus(e) {
    const { name } = e.target;
    if (errors[name]) {
      setErrors((prev) => withFieldError(prev, name, ""));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nextTouched = {
      name: true,
      email: true,
      reason: true,
      message: true,
    };
    const nextErrors = validateAll(values);

    setTouched(nextTouched);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(INITIAL_VALUES).find(
        (field) => nextErrors[field],
      );
      if (firstInvalid) {
        const el = document.getElementById(firstInvalid);
        if (el && typeof el.focus === "function") el.focus();
      }
      return;
    }

    setIsSubmitted(true);
    setValues(INITIAL_VALUES);
    setTouched({});
    setErrors({});
  }

  function resetForm() {
    setValues(INITIAL_VALUES);
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  }

  function fieldProps(name) {
    const invalid = Boolean(touched[name] && errors[name]);
    return {
      id: name,
      name,
      value: values[name],
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      "aria-invalid": invalid ? "true" : undefined,
      "aria-describedby": invalid ? `${name}-error` : undefined,
      required: true,
    };
  }

  return (
    <>
      <section className="section markets-container-section">
        <div className="container">
          <div className="contact_container">
            <div className="sub_containt">
              <p className="contact_content">Contact Us</p>
              <h1 className="contact_header">Let&apos;s Talk Markets</h1>
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
                Our community team is based in Portland, Oregon. We&apos;re
                small but mighty — and we genuinely love hearing from market
                enthusiasts.
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
                  Market operators get priority replies. Select &quot;List a new
                  market&quot; in the form and we&apos;ll respond within 4 hours
                  during business days.
                </p>
              </div>
            </div>
            <div className="form_container_right">
              {isSubmitted ? (
                <div
                  className="form_success"
                  role="status"
                  aria-live="polite"
                  tabIndex={0}
                >
                  <h3 className="header_text">Thanks — message received!</h3>
                  <p className="header_desc">
                    Your enquiry has been sent successfully. Expect a reply
                    within one business day.
                  </p>
                  <button
                    type="button"
                    className="form_btn_submit"
                    onClick={resetForm}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  className="form_action"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="form_contain">
                    <div className="form_left">
                      <div className="form_item">
                        <p className="form_label">
                          <label htmlFor="name">Full Name *</label>
                        </p>
                        <input
                          type="text"
                          className="form_input"
                          placeholder="Enter your name..."
                          autoComplete="name"
                          {...fieldProps("name")}
                        />
                        <span
                          className="message error"
                          id="name-error"
                          role={
                            touched.name && errors.name ? "alert" : undefined
                          }
                        >
                          {touched.name ? errors.name : ""}
                        </span>
                      </div>
                    </div>
                    <div className="form_right">
                      <div className="form_item">
                        <p className="form_label">
                          <label htmlFor="email">Email Address *</label>
                        </p>
                        <input
                          type="email"
                          className="form_input"
                          placeholder="Enter your email..."
                          autoComplete="email"
                          {...fieldProps("email")}
                        />
                        <span
                          className="message error"
                          id="email-error"
                          role={
                            touched.email && errors.email ? "alert" : undefined
                          }
                        >
                          {touched.email ? errors.email : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="form_item">
                    <p className="form_label">
                      <label htmlFor="reason">Reason for contact *</label>
                    </p>
                    <select
                      id="reason"
                      name="reason"
                      className="form_input"
                      value={values.reason}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      aria-invalid={
                        touched.reason && errors.reason ? "true" : undefined
                      }
                      aria-describedby={
                        touched.reason && errors.reason
                          ? "reason-error"
                          : undefined
                      }
                      required
                    >
                      <option className="form_options" value="" disabled>
                        Select a reason
                      </option>
                      {REASON_OPTIONS.map((opt) => (
                        <option
                          key={opt.value}
                          className="form_options"
                          value={opt.value}
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <span
                      className="message error"
                      id="reason-error"
                      role={
                        touched.reason && errors.reason ? "alert" : undefined
                      }
                    >
                      {touched.reason ? errors.reason : ""}
                    </span>
                  </div>

                  <div className="form_item">
                    <p className="form_label">
                      <label htmlFor="message">Message *</label>
                    </p>
                    <textarea
                      className="form_input"
                      placeholder="Tell us about your market, question, or idea..."
                      rows="5"
                      cols="40"
                      {...fieldProps("message")}
                    />
                    <span
                      className="message error"
                      id="message-error"
                      role={
                        touched.message && errors.message ? "alert" : undefined
                      }
                    >
                      {touched.message ? errors.message : ""}
                    </span>
                  </div>

                  <button type="submit" className="form_btn_submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="form_maps">
            <MapLocation
              position={[10.807834396930526, 106.66347632096286]}
              zoom={15}
              height="450px"
              popupText="1420 SE Morrison St, Portland, OR 97214"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
