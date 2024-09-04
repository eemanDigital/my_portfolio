import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
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
      .sendForm("service_hgdz10r", "template_ljrkt65", form.current, {
        publicKey: "tCvGvvhyshhPv3Q6t",
      })
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
    <section className="contact">
      <TitleHeader title="Contact" icon={<RiContactsBook3Line size={40} />} />

      <div className="contact-form-container ">
        <ToastContainer />
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input type="text" name="user_name" id="user_name" required />
            {formErrors.user_name && (
              <span className="error">{formErrors.user_name}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" name="user_email" id="user_email" required />
            {formErrors.user_email && (
              <span className="error">{formErrors.user_email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" required />
            {formErrors.subject && (
              <span className="error">{formErrors.subject}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required></textarea>
            {formErrors.message && (
              <span className="error">{formErrors.message}</span>
            )}
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
