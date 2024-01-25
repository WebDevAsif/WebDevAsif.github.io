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

  // Function to handle clicking to call the phone number
  const handleClickToCall = () => {
    window.open(`tel:${phoneNumber}`);
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
    <section className={style.contact} id="contacts">
      <h2>Contact</h2>
      <hr />
      <div className={style.contactSection}>
        <div className={style.leftSide}>
          <div className={style.icons}>
            <i className="fa-solid fa-phone"></i>
            <div onClick={handleClickToCall}>
              <a href="#">+918789787472</a>
            </div>
          </div>
          <div className={style.icons}>
            <i className="fa-solid fa-envelope"></i>
            <div>
              <a href={`mailto:${emailAddress}`}>asifbinsabir611@gmail.com</a>
            </div>
          </div>
          <div className={style.icons}>
            <i className="fa-solid fa-location-arrow"></i>
            <div>
              <a href="#contacts">Bihar, India</a>
            </div>
          </div>
        </div>
        <div className={style.rightSide}>
          <form action="#" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={FormData.fullName}
              onChange={handleInputChange}
              name="fullName"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={FormData.emailAddress}
              onChange={handleInputChange}
              name="emailAddress"
              required
            />
            <div className={style.inline}>
              <input
                className={style.phoneNumber}
                type="number"
                placeholder="Phone Number"
                value={FormData.phoneNumber}
                onChange={handleInputChange}
                name="phoneNumber"
                required
              />
              <input
                className={style.subject}
                type="text"
                placeholder="Subject"
                value={FormData.subject}
                onChange={handleInputChange}
                name="subject"
                required
              />
            </div>
            <textarea
              className={style.message}
              type="text"
              placeholder="Your Message"
              value={FormData.message}
              onChange={handleInputChange}
              name="message"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}
