import React from "react";
import Cards from "./cards";
import img from "./poster.png";
import Footer from "./footer";
const Content = () => {
  return (
    <>
     <header className="header">Blog</header>
      {/* poster section  */}
      <div className="posterContainer">
        <img src={img} className="posterImg" alt="" />
      </div>

      {/* blog heading */}

      <div className="blogContent">
        <h1>BLOG</h1>
        <p>
          Keep up to date with the latest fitness industry news, educational
          articles, & other fit tips!
        </p>
      </div>

      {/* cards section start from here  */}
      <section className="cardContainer">
        <Cards />
        <Cards />
        <Cards />
        <div className="contactCo">
          <div>Want to Find Out More </div>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </p>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Content;
