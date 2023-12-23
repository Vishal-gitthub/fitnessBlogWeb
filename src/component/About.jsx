import React from "react";
import Footer from "./footer";
const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <section className="w-100vw">
          <img
            className="about-headerImg"
            src="https://source.unsplash.com/1400x500/?gym"
            alt=""
          />
        </section>
        <div className="aboutContainer">
          <div className="aboutContent">
            <h1>About Us</h1>

            <div className="aboutHeading">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid, quis!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                voluptates praesentium, neque quasi, assumenda minima qui facere
                perspiciatis, dolore saepe velit molestiae repellat! Eum,
                tenetur! Culpa aperiam voluptate fugit quasi debitis nesciunt
                rerum doloremque modi eum totam.
              </p>
            </div>
          </div>
          <div className="splitterContainer">
            <div className="aboutSplitter">
              <div className="leftContent">
                <h2>TBD...</h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                nostrum nemo quasi adipisci enim, dolorum cum dolores, magni
                perspiciatis beatae amet laudantium itaque voluptates deserunt
                tempore ipsum sapiente? Repellendus cum mollitia atque
                blanditiis numquam at recusandae modi enim velit iure.
              </div>
              <div className="rytContent">
                <img
                  className="br8px"
                  src="https://source.unsplash.com/500x500/?fitness"
                  alt=""
                />
              </div>
            </div>

            <div className="aboutSplitter">
              <div className="leftContent">
                <img
                  className="br8px"
                  src="https://source.unsplash.com/500x500/?yoga"
                  alt=""
                />
              </div>
              <div className="rytContent">
                <h2>TBD...</h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                nostrum nemo quasi adipisci enim, dolorum cum dolores, magni
                perspiciatis beatae amet laudantium itaque voluptates deserunt
                tempore ipsum sapiente? Repellendus cum mollitia atque
                blanditiis numquam at recusandae modi enim velit iure.
              </div>
            </div>

            <div className="aboutSplitter">
              <div className="leftContent">
                <h2>TBD...</h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                nostrum nemo quasi adipisci enim, dolorum cum dolores, magni
                perspiciatis beatae amet laudantium itaque voluptates deserunt
                tempore ipsum sapiente? Repellendus cum mollitia atque
                blanditiis numquam at recusandae modi enim velit iure.
              </div>
              <div className="rytContent">
                <img
                  className="br8px"
                  src="https://source.unsplash.com/500x500/?abs"
                  alt=""
                />
              </div>
            </div>

            <div className="aboutSplitter">
              <div className="leftContent">
                <img
                  className="br8px"
                  src="https://source.unsplash.com/500x500/?archers"
                  alt=""
                />
              </div>
              <div className="rytContent">
                <h2>TBD...</h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                nostrum nemo quasi adipisci enim, dolorum cum dolores, magni
                perspiciatis beatae amet laudantium itaque voluptates deserunt
                tempore ipsum sapiente? Repellendus cum mollitia atque
                blanditiis numquam at recusandae modi enim velit iure.
              </div>
            </div>
          </div>
          <div className="aboutDetails">
            <h2>Our Standards</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              perspiciatis deserunt porro rerum dignissimos. Officiis quibusdam
              autem molestias error, consectetur quis odio, minima voluptatibus
              veritatis quia tenetur maiores rem? Numquam.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
