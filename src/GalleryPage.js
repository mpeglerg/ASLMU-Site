import React from "react";
import "./HomePage.css";
import "./GalleryPage.css";
import ImageGallery from "react-image-gallery";
import GalleryImage01 from "./images/GalleryImage01.jpg";
import GalleryImage02 from "./images/GalleryImage02.JPG";
import GalleryImage03 from "./images/GalleryImage03.jpg";
import GalleryImage04 from "./images/GalleryImage04.jpg";
import GalleryImage06 from "./images/GalleryImage06.jpg";
import GalleryImage07 from "./images/GalleryImage07.jpg";
import GalleryImage08 from "./images/GalleryImage08.JPG";
import GalleryImage09 from "./images/GalleryImage09.jpg";
import GalleryImage10 from "./images/GalleryImage10.jpg";
import GalleryImage11 from "./images/GalleryImage11.JPG";
import GalleryImage12 from "./images/GalleryImage12.jpg";
import GalleryImage13 from "./images/GalleryImage13.jpg";
import GalleryImage14 from "./images/GalleryImage14.JPG";
import GalleryImage15 from "./images/GalleryImage15.jpg";
import GalleryImage16 from "./images/GalleryImage16.jpg";
import GalleryImage17 from "./images/GalleryImage17.jpg";
import GalleryImage18 from "./images/GalleryImage18.JPG";
import GalleryImage19 from "./images/GalleryImage19.JPG";
import GalleryImage20 from "./images/GalleryImage20.JPG";
import GalleryImage21 from "./images/GalleryImage21.JPG";
import GalleryImage22 from "./images/GalleryImage22.JPG";

const galleryImages = [
  {
    original: GalleryImage01,
    thumbnail: GalleryImage01
  },
  {
    original: GalleryImage02,
    thumbnail: GalleryImage02
  },
  {
    original: GalleryImage03,
    thumbnail: GalleryImage03
  },
  {
    original: GalleryImage04,
    thumbnail: GalleryImage04
  },
  {
    original: GalleryImage06,
    thumbnail: GalleryImage06
  },
  {
    original: GalleryImage07,
    thumbnail: GalleryImage07
  },
  {
    original: GalleryImage08,
    thumbnail: GalleryImage08
  },
  {
    original: GalleryImage09,
    thumbnail: GalleryImage09
  },
  {
    original: GalleryImage10,
    thumbnail: GalleryImage10
  },
  {
    original: GalleryImage11,
    thumbnail: GalleryImage11
  },
  {
    original: GalleryImage12,
    thumbnail: GalleryImage12
  },
  {
    original: GalleryImage13,
    thumbnail: GalleryImage13
  },
  {
    original: GalleryImage14,
    thumbnail: GalleryImage14
  },
  {
    original: GalleryImage15,
    thumbnail: GalleryImage15
  },
  {
    original: GalleryImage16,
    thumbnail: GalleryImage16
  },
  {
    original: GalleryImage17,
    thumbnail: GalleryImage17
  },
  {
    original: GalleryImage18,
    thumbnail: GalleryImage18
  },
  {
    original: GalleryImage19,
    thumbnail: GalleryImage19
  },
  {
    original: GalleryImage20,
    thumbnail: GalleryImage20
  },
  {
    original: GalleryImage21,
    thumbnail: GalleryImage21
  },
  {
    original: GalleryImage22,
    thumbnail: GalleryImage22
  }
];
export default function GalleryPage() {
  return (
    <div>
      <h1 className="GalleryTitle">Gallery</h1>
      <ImageGallery
        items={galleryImages}
        autoPlay={true}
        className="Gallery"></ImageGallery>
    </div>
  );
}
