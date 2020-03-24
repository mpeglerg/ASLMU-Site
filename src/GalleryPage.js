import React from "react";
import "./HomePage.css";
import "./GalleryPage.css";
import ImageGallery from "react-image-gallery";
import GalleryImage01 from "./images/GalleryImage01.jpg";
import GalleryImage02 from "./images/GalleryImage02.jpg";
import GalleryImage03 from "./images/GalleryImage03.jpg";
import GalleryImage04 from "./images/GalleryImage04.jpg";
import GalleryImage05 from "./images/GalleryImage05.jpg";
import GalleryImage06 from "./images/GalleryImage06.jpg";
import GalleryImage07 from "./images/GalleryImage07.jpg";
import GalleryImage08 from "./images/GalleryImage08.jpg";
import GalleryImage09 from "./images/GalleryImage09.jpg";
import GalleryImage10 from "./images/GalleryImage10.jpg";
import GalleryImage11 from "./images/GalleryImage11.jpg";
import GalleryImage12 from "./images/GalleryImage12.jpg";
import GalleryImage13 from "./images/GalleryImage13.jpg";

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
    original: GalleryImage05,
    thumbnail: GalleryImage05
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
  }
];
export default function GalleryPage() {
  return (
    <div>
      <h1 className="GalleryTitle">Gallery</h1>
      <ImageGallery items={galleryImages} autoPlay={true}></ImageGallery>
    </div>
  );
}
