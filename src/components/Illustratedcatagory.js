import React from "react";
import "./section.css";
import { saveAs } from "file-saver";
import { Button } from "react-bootstrap";
function Illustratedcatagory() {
  const downloadImage = () => {
    saveAs("/images/ai/image1.jpg", "image.jpg"); // Put your image url here.
  };
  return (
    <>
      <h1>illustrated Art catagory</h1>

      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src=" /images/illustrate/image1.jpg" alt="not ound" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image1.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src=" /images/illustrate/image2.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image2.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/illustrate/image3.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image3.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>

      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src=" /images/illustrate/image4.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image4.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/illustrate/image5.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image5.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/illustrate/image6.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image6.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/illustrate/image7.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image7.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src=" /images/illustrate/image8.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image8.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src=" /images/illustrate/image9.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image9.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/illustrate/image10.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image10.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/illustrate/image11.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image11.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/illustrate/image12.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/illustrate/image12.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
    </>
  );
}

export default Illustratedcatagory;
