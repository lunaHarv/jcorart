import React from "react";
import "./section.css";
import { saveAs } from "file-saver";
import { Button } from "react-bootstrap";
function Naturecatagory() {
  const downloadImage = () => {
    saveAs("/images/ai/image1.jpg", "image.jpg"); // Put your image url here.
  };
  return (
    <>
      <h1>Nature catagory</h1>

      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src=" /images/nature/image1.jpg" alt="not ound" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image1.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src=" /images/nature/image2.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image2.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/nature/image3.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image3.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>

      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src=" /images/nature/image4.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image4.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/nature/image5.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image5.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/nature/image6.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image6.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/nature/image7.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image7.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src=" /images/nature/image8.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src=" /images/nature/image4.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image4.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/nature/image10.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image10.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/nature/image11.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image11.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
      <div class="gallary_card_active">
        <div class="gallaryContent">
          <img src="  /images/nature/image12.jpg" alt="" />
        </div>

        <Button className="m-3 p-3 " onClick={downloadImage}>
          Download!
        </Button>
        <a
          className="btn btn-light m-3"
          href="/images/nature/image12.jpg"
          role="button"
        >
          <i className="fas fa-eye"></i> full screen
        </a>
      </div>
    </>
  );
}

export default Naturecatagory;
