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

  // validate form submission
  const validateForm = () => {
    const errors = {};
    const formData = new FormData(form.current);

    if (!formData.get("user_name")) {
      errors.user_name = "Name is required";
    }
    if (!formData.get("user_email")) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("user_email"))) {
      errors.user_email = "Email is invalid";
    }
    if (!formData.get("subject")) {
      errors.subject = "Subject is required";
    }
    if (!formData.get("message")) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // send mail handler
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
          toast.success("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send email. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className={styles.contact}>
      <TitleHeader title="Contact" icon={<RiContactsBook3Line size={20} />} />

      <div className={styles.contactFormContainer} data-aos="fade-up">
        <ToastContainer />
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.formGroup}>
            <label htmlFor="user_name">Name</label>
            <input type="text" name="user_name" id="user_name" required />
            {formErrors.user_name && (
              <span className={`${styles.error} ${styles.visible}`}>
                {formErrors.user_name}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="user_email">Email</label>
            <input type="email" name="user_email" id="user_email" required />
            {formErrors.user_email && (
              <span className={`${styles.error} ${styles.visible}`}>
                {formErrors.user_email}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" required />
            {formErrors.subject && (
              <span className={`${styles.error} ${styles.visible}`}>
                {formErrors.subject}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required></textarea>
            {formErrors.message && (
              <span className={`${styles.error} ${styles.visible}`}>
                {formErrors.message}
              </span>
            )}
          </div>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
