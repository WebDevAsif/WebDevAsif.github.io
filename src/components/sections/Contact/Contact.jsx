import { useEffect, useRef, useState } from "react";
import style from "./Contact.module.css";
import Button from "../../common/Button/Button";
import Seperator from "../../common/Seperator/Seperator";

export default function Contact() {
  const form = useRef();
  const [FormData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(null);

  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
  const address = import.meta.env.VITE_ADDRESS;

  const handleClickToCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleClickToMail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  const handleClickToMap = () => {
    const latitude = 25.18953;
    const longitude = 85.520036;

    // const geoUri = `geo:${latitude},${longitude}`;
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

    window.open(mapsUrl, "_blank");
  };

  // Function to handle input changes in the form
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email using EmailJS
      emailjs
        .sendForm(
          "service_n89eg0u",
          "template_x5ymzb5",
          form.current,
          "jFbeBecjPqRy22XVC"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      setEmailSent(true);

      // Clear the form
      setFormData({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setEmailSent(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setEmailSent(null), 5000);
    return () => clearTimeout(timer);
  }, [emailSent]);

  return (
    <section className={style.contactSection} id="contacts">
      <h2 className={style.contactTitle}>Contact</h2>
      <Seperator />
      <div className={style.content}>
        <div className={style.infoContainer}>
          <Button onClick={handleClickToCall} className={style.contactInfo}>
            <i className="fa-solid fa-phone"></i>
            <div>{phoneNumber}</div>
          </Button>
          <Button onClick={handleClickToMail} className={style.contactInfo}>
            <i className="fa-solid fa-envelope"></i>
            <div>{emailAddress}</div>
          </Button>
          <Button onClick={handleClickToMap} className={style.contactInfo}>
            <i className="fa-solid fa-location-arrow"></i>
            <div>{address}</div>
          </Button>
        </div>
        <div className={style.contactFormContainer}>
          <form ref={form} onSubmit={handleSubmit} className={style.contactForm}>
            <input
              type="text"
              placeholder="Full Name"
              value={FormData.fullName}
              onChange={handleInputChange}
              name="fullName"
              className={style.formInput}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={FormData.emailAddress}
              onChange={handleInputChange}
              name="emailAddress"
              className={style.formInput}
              required
            />
            <div className={style.inlineInput}>
              <input
                type="number"
                placeholder="Phone Number"
                value={FormData.phoneNumber}
                onChange={handleInputChange}
                name="phoneNumber"
                className={`${style.formInput} ${style.phoneNumber}`}
              />
              <input
                type="text"
                placeholder="Subject"
                value={FormData.subject}
                onChange={handleInputChange}
                name="subject"
                className={`${style.formInput} ${style.subject}`}
                required
              />
            </div>
            <textarea
              type="text"
              placeholder="Your Message"
              value={FormData.message}
              onChange={handleInputChange}
              name="message"
              className={`${style.formInput} ${style.message}`}
              required
            />
            <Button label={"Submit"} className={style.formSubmitBtn} />
          </form>
          {emailSent === true && (
            <p className={style.successMessage}>
              <i className="fa-solid fa-circle-check"></i>&nbsp;Your message was sent
              successfully!
            </p>
          )}
          {emailSent === false && (
            <p className={style.errorMessage}>
              There was an error sending your message. Please try again.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
