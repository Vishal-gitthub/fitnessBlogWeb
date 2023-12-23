import React from "react";
import Footer from './footer'
const Contact = () => {
  return (
    <div>
      <div className="contactContainer">
        <div className="contactPcontent">
          Hi' My Name is <input type="text" className="inputPadding" />.
          <br />
          <span className="addressDetails">
            and i am from <input type="text" className="inputPadding" />.
          </span>
          <br />
          <span className="ph-No">
            my Contact No. is <input type="text" className="inputPadding" />
          </span>
          <br />
          <div className="contactBtn">
            <button>Send Details</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default Contact;
