import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./contact.module.css";
import TitleHeader from "../TitleHeader/TitleHeader";
import { RiContactsBook3Line } from "react-icons/ri";

const ContactForm = () => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [focusedField, setFocusedField] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.user_name) {
      errors.user_name = "Name is required";
    }
    if (!formData.user_email) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = "Email is invalid";
    }
    if (!formData.subject) {
      errors.subject = "Subject is required";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className={styles.contact}>
      <TitleHeader title="Contact" icon={<RiContactsBook3Line size={20} />} />

      <div className={styles.contactFormContainer} data-aos="fade-right">
        <ToastContainer />
        <div className={styles.formWrapper}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("user_name")}
                  onBlur={() => setFocusedField("")}
                  className={formData.user_name ? styles.hasValue : ""}
                  required
                />
                <label
                  htmlFor="user_name"
                  className={`${styles.floatingLabel} ${
                    focusedField === "user_name" || formData.user_name
                      ? styles.focused
                      : ""
                  }`}>
                  Name
                </label>
                <div className={styles.inputLine} />
                {formErrors.user_name && (
                  <span className={styles.error}>{formErrors.user_name}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("user_email")}
                  onBlur={() => setFocusedField("")}
                  className={formData.user_email ? styles.hasValue : ""}
                  required
                />
                <label
                  htmlFor="user_email"
                  className={`${styles.floatingLabel} ${
                    focusedField === "user_email" || formData.user_email
                      ? styles.focused
                      : ""
                  }`}>
                  Email
                </label>
                <div className={styles.inputLine} />
                {formErrors.user_email && (
                  <span className={styles.error}>{formErrors.user_email}</span>
                )}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField("")}
                className={formData.subject ? styles.hasValue : ""}
                required
              />
              <label
                htmlFor="subject"
                className={`${styles.floatingLabel} ${
                  focusedField === "subject" || formData.subject
                    ? styles.focused
                    : ""
                }`}>
                Subject
              </label>
              <div className={styles.inputLine} />
              {formErrors.subject && (
                <span className={styles.error}>{formErrors.subject}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField("")}
                className={formData.message ? styles.hasValue : ""}
                required></textarea>
              <label
                htmlFor="message"
                className={`${styles.floatingLabel} ${
                  focusedField === "message" || formData.message
                    ? styles.focused
                    : ""
                }`}>
                Message
              </label>
              <div className={styles.inputLine} />
              {formErrors.message && (
                <span className={styles.error}>{formErrors.message}</span>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
              <span className={styles.buttonHighlight}></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
