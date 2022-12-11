import React from 'react'
import Slider from 'react-slick'

export default function Index() {
  const menu = ['Beranda', 'Kontak']
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          bottom: "50px",
          // backgroundColor: "#ddd",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px", width: "100%" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div style={{ padding: "10px", borderRadius: "10px" }}>{menu[i]}</div>
    ),
  }

  return (
    <div className="container-tmp">
      <Slider {...settings} className="box-slider">
        <div className="slider-item">
          <h3>1</h3>
        </div>
        <div className="slider-item">
          <h3>2</h3>
        </div>
      </Slider>
      <style>
        {`
          .container-tmp {
            position: absolute;
            bottom: 0;
            top: 0;
            right: 0;
            left: 0;
            z-index: 999;
            margin: 0;
          }
          .box-slider {
            position: relative;
            height: 100vh;
          }
          .slider-item {
            height: 100vh;
            background: #dff9fb;
          }
          .slick-dots li {
            width: auto;
            height: 0;
            font-size: 12pt;
            font-weight: 600;
          }
          .slick-dots li div {
            background: #22a6b3;
            color: #fff;
          }
          .slick-dots li.slick-active div {
            background: #95afc0;
          }
        `}
      </style>
    </div>
  )
}
