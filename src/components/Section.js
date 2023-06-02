import React from "react";
import "./section.css";
function Section() {
  return (
    <>
      <div class="herocard">
        <div class="herocontent">
          <img src="  banner.jpg" alt="" />
        </div>
      </div>
      <div class="hone">
        <h1>catagory</h1>
      </div>
      <div class="card_active">
        <div class="content">
          <img src="  hero.jpg" alt="" />
          <a href="/Aicatagory">
            {" "}
            <h3>Ai generated</h3>
            <button class="herobtn">explore more</button>{" "}
          </a>
        </div>
      </div>
      <div class="card_active">
        <div class="content">
          <img src="  nature.jpg" alt="" />
          <a href="/Naturecatagory">
            {" "}
            <h3>nature</h3>
            <button class="herobtn">explore more</button>{" "}
          </a>
        </div>
      </div>
      <div class="card_active">
        <div class="content">
          <img src="  sketch.jpg" alt="" />
          <a href="/Sketch">
            {" "}
            <h3>sketch</h3>
            <button class="herobtn">explore more</button>{" "}
          </a>
        </div>
      </div>
      <div class="card_active">
        <div class="content">
          <img src="  oilpaint.jpg" alt="" />
          <a href="/Oilpaint">
            {" "}
            <h3>oil paint</h3>
            <button class="herobtn">explore more</button>{" "}
          </a>
        </div>
      </div>
      <div class="card_active">
        <div class="content">
          <img src="  canva.jpg" alt="" />
          <a href="/Canva">
            {" "}
            <h3>canva</h3>
            <button class="herobtn">explore more</button>{" "}
          </a>
        </div>
      </div>
      <div class="card_active">
        <div class="content">
          <img src="  illustrated.jpg" alt="" />
          <a href="/illustrated">
            {" "}
            <h3>illustrated</h3>
            <button class="herobtn">explore more</button>{" "}
          </a>
        </div>
      </div>
      <div class="hone">
        <h1>Gallary</h1>
      </div>
      <div class="herocard">
        <div class="herocontent">
          <img src="  eth1.jpg" alt="" />
          <img src="  eth2.jpg" alt="" />
          <img src="  eth3.jpg" alt="" />
          <p class="heroheading">jcor Art</p>
          <p class="heading">
            welcome to jcor Art welcome to jcor Art welcome to
          </p>

          <p class="heropara"></p>
          <a href="/latest">
            {" "}
            <button class="herobtn">explore more</button>{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default Section;
