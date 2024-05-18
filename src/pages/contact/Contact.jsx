import React, { useState } from "react";
import "../../sass/__contact.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BOT_TOKEN = "7165736769:AAGYTqkorHkjWYhl1dFECngcg9JzQn4JPR4";
const USER_ID = "483634518";
let initialState = {
  fname: "",
  lname: "",
  tel: "",
  area: "",
};
const Contact = () => {
  let [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Buyurtma    ";
    text += data.fname;
    text += data.lname;
    text += "%0A";
    text += data.tel;
    text += "%0A";
    text += data.area;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.onload = function () {
      if (api.status >= 200 && api.status < 400) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    };
    api.onerror = function () {
      toast.error("Failed to send message. Please try again later.");
    };
    api.send();
    setData(initialState);
  };

  return (
    <div className="contact__wrapper">
      <ToastContainer />
      <div className="container">
        <form onSubmit={handleSubmit} className="contact__section">
          <input
            value={data.fname}
            type="text"
            placeholder="Enter yor first name "
            onChange={(e) => setData((p) => ({ ...p, fname: e.target.value }))}
            required
          />
          <input
            value={data.lname}
            type="text"
            placeholder="Enter yor last name "
            onChange={(e) => setData((p) => ({ ...p, lname: e.target.value }))}
            required
          />
          <input
            value={data.tel}
            type="tel"
            placeholder="Enter your phone number"
            onChange={(e) => setData((p) => ({ ...p, tel: e.target.value }))}
            required
          />
          <textarea
            value={data.area}
            cols="30"
            rows="10"
            onChange={(e) => setData((p) => ({ ...p, area: e.target.value }))}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
