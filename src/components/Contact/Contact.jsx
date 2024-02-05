import { useState } from "react";
import style from "../Contact/Contact.module.css";

export default function Contact() {
  const [FormData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const phoneNumber = "+918789787472";
  const emailAddress = "asifbinsabir611@gmail.com";
  const address = "Bihar, India";

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

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className={style.contactSection} id="contacts">
      <h2 className={style.contactTitle}>Contact</h2>
      <hr className={style.seperator} />
      <div className={style.content}>
        <div className={style.infoContainer}>
          <button onClick={handleClickToCall} className={style.contactInfo}>
            <i className="fa-solid fa-phone"></i>
            <div>{phoneNumber}</div>
          </button>
          <button onClick={handleClickToMail} className={style.contactInfo}>
            <i className="fa-solid fa-envelope"></i>
            <div>{emailAddress}</div>
          </button>
          <button onClick={handleClickToMap} className={style.contactInfo}>
            <i className="fa-solid fa-location-arrow"></i>
            <div>{address}</div>
          </button>
        </div>
        <div className={style.contactFormContainer}>
          <form action="#" onSubmit={handleSubmit} className={style.contactForm}>
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
                required
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
            <button type="submit" className={style.formSubmitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
