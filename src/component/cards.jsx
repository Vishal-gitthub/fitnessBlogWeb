import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="card">
        <img src="https://source.unsplash.com/250x500/?healthy-Food" alt="" />
        <div className="details">
          <h1>Healthy Diet</h1>
          <span>7 September,2003</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, optio pariatur doloribus, ipsam eius saepe ad est, unde
            ipsa quam architecto perspiciatis?
          </p>
          <div className="authorNdBtn">
            <div className="author">~By Someone</div>
            <button className="r-m-Btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
