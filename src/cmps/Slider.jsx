import React, { useState } from 'react'
import { BtnSlider } from './BtnSlider';

export function Slider() {

  const img1 = process.env.PUBLIC_URL + "/imgs/about1.jpeg";
  const img2 = process.env.PUBLIC_URL + "/imgs/about2.jpeg";
  const img3 = process.env.PUBLIC_URL + "/imgs/about3.jpeg";
  const img4 = process.env.PUBLIC_URL + "/imgs/about4.jpeg";

  const imges = [
    { _id: 101, img1 },
    { _id: 102, img2 },
    { _id: 103, img3 },
    { _id: 104, img4 }
  ];

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== imges.length) {
      setSlideIndex(slideIndex+1);
    } else if (slideIndex === imges.length) {
      setSlideIndex(1);
    }
  }

  const prevSlide = () => {
       if (slideIndex !== 1) {
         setSlideIndex(slideIndex - 1);
       } else if (slideIndex === 1) {
         setSlideIndex(imges.length);
       }
  }

  return (
    <>
      {imges.map((img, idx) => (
        <div
          className={slideIndex === idx + 1 ? "slide active-anim " : "slide"}
          key={img._id}
        >
          <img className="slide-img" src={`/imgs/about${+idx + 1}.jpeg`} alt="" />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </>
  );
}
