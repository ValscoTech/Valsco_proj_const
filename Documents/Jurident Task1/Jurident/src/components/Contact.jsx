import "./Contact.css";
import { useState } from "react";
import bg from "../assets/contactbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { addinfo } from "./ContactFunctions";

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
		// Perform any form submission logic here
		try {
			await addinfo(
				firstName,
				lastName,
				email,
				phoneNumber,
				enquiryType,
				message
			);
			setFirstName("");
			setLastName("");
			setEmail("");
			setPhoneNumber("");
			setEnquiryType("");
			setMessage("");
		} catch (e) {
			console.log("Error calling Firebase function: ", e);
		}

		// Logging the information
		// console.log("Form submitted with data:", {
		// 	firstName,
		// 	lastName,
		// 	email,
		// 	phoneNumber,
		// 	enquiryType,
		// 	message,
		// });
	};
  return (
    <div>
      <div className="title dark:text-white">Contact Us</div>
      <div className="para">
        Any question or remarks? Just write us a message!
      </div>
      <div className="contact-container">
        <div className="row dark:bg-darkGrey">
          <div className="left">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-row">
                <div className="form-left">
                  <label className='dark:text-white' htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    placeholder="John"
                    className="border-[0] border-b border-solid border-black dark:border-white dark:caret-white dark:text-white"
                  />
                </div>
                <div className="form-right">
                  <label className='dark:text-white' htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    placeholder="Doe"
                    className="border-[0] border-b border-solid border-black dark:border-white dark:caret-white dark:text-white"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-left">
                  <label className='dark:text-white' htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Johndoe1234@gmail.com"
                    className="border-[0] border-b border-solid border-black dark:border-white dark:caret-white dark:text-white"
                  />
                </div>
                <div className="form-right">
                  <label className='dark:text-white' htmlFor="mobilenumber">Mobile Number</label>
                  <input
                    type="tele"
                    id="mobilenumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    placeholder="+91 1234567890"
                    className="border-[0] border-b border-solid border-black dark:border-white dark:caret-white dark:text-white"
                  />
                </div>
              </div>

              <div className="form-row">
                <label className='dark:text-white'
                  style={{ width: "100%", margin: "5px", marginBottom: "10px" }}
                >
                  Select Query
                </label>
                <div className="options">
                  <div>
                    <input
                      type="radio"
                      id="enquiryTypeGeneral"
                      name="enquiryType"
                      value="General"
                      checked={enquiryType === "General"}
                      onChange={() => setEnquiryType("General")}
                      required
                      className="border-[0] border-b border-solid border-black dark:border-white dark:caret-white dark:text-white"
                    />
                    <label className='dark:text-white' htmlFor="enquiryTypeGeneral"> General</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="enquiryTypeSupport"
                      name="enquiryType"
                      value="Support"
                      checked={enquiryType === "Support"}
                      onChange={() => setEnquiryType("Support")}
                      required
                      className="border-[0] border-b border-solid border-black dark:border-white dark:caret-white dark:text-white"
                    />
                    <label className='dark:text-white' htmlFor="enquiryTypeSupport">Support</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="enquiryTypeCollaboration"
                      name="enquiryType"
                      value="Collaboration"
                      checked={enquiryType === "Collaboration"}
                      onChange={() => setEnquiryType("Collaboration")}
                      required
                      className="border-[0] border-b border-solid border-black dark:border-white dark:caret-white dark:text-white"
                    />
                    <label className='dark:text-white' htmlFor="enquiryTypeCollaboration">
                      Collaboration
                    </label>
                  </div>
                  
                </div>
              </div>

              <div className="form-row">
                <label className='dark:text-white' htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="write your message here"
                  className="border-[0] border-b border-solid border-black dark:border-white dark:caret-white dark:text-white"
                />
              </div>
              <div className="form-row">
                <button className='dark:bg-white dark:text-black dark:font-semibold' type="submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className="right">
            <img className='contact-bg' src={bg} />
            <div className="details">
              <h2>Contact Information</h2>
              <p>Say something to chat!</p>
              <div className="icons">
                <p>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#ffffff", margin: "0px 10px" }}
                  />{" "}
                  xxx-xxx-xxxx
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#ffffff", margin: "0px 10px" }}
                  />
                  example@example.com
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#ffffff", margin: "0px 10px" }}
                  />{" "}
                  No. 5/1, Durga Mata Mandir Road, Moti Nagar 110015 New Delhi,
                  India
                </p>
              </div>
              <div className="social-container">
                <div className="social">
                  <Facebook />
                </div>
                <div className="social">
                  <Twitter />
                </div>
                <div className="social">
                  <Instagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
