import React, { useState } from 'react'
import Slider from 'react-slick'
import CardBank from '../../../components/card-bank'
import PlayButton from './play-button'
import Cover from './cover'
import Copyright from './copyright'
import { useQuery } from '../../../utils'
import audio from '../../../sound/ada_untukmu.mp3'

export default function Index() {
  const query = useQuery()
  const [show, setShow] = useState(true)
  const menu = [`Acara`, 'Protokol', 'Foto', 'Gift']
  const [music, setMusic] = useState({
    prepare: new Audio(audio),
    playing: false,
  })
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          bottom: '50px',
          padding: '10px',
        }}
      >
        <ul style={{ margin: '0px', width: '100%' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div style={{ padding: '5px', borderRadius: '10px' }}>
        {menu[i]}
      </div>
    ),
  }

  const HandlePausedMusic = (params) => {
    if (params) {
      music.prepare.pause()
      setMusic({
        ...music,
        playing: false,
      })
    } else {
      music.prepare.play()
      setMusic({
        ...music,
        playing: true,
      })
    }
  }

  const onHideCover = (params) => {
    music.prepare.play()
    setMusic({
      ...music,
      playing: true,
    })
    setShow(params)
  }

  return (
    <>
      <PlayButton
        isPlay={music?.playing}
        onPaused={HandlePausedMusic}
      />
      <div className="container-tmp">
        <Cover
          show={show}
          to={query.get('to')}
          onHide={(val) => onHideCover(val)}
        />
        <Slider {...settings} className="box-slider">
          <div className="slider-item">
            <div className="page-item center-content">
              <p className="text-1">
                Mengharapkan kehadiran sahabat semua di hari ulang
                tahun ku yang akan diadakan pada:
              </p>
              <p className="text-2">
                <ul style={{ listStyle: 'none' }}>
                  <li>Tanggal: Sabtu 22 Mei 2022</li>
                  <li>Tempat: Rumahku</li>
                  <li>Alamat: Jl. Raya Sentani Jayapura</li>
                </ul>
              </p>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title="maps-layout"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Masjid+Agung+Al+Aqsha+Jl.+Raya+Sentani,+Sentani+Kota,+Sentani+Sentani+Kota+Kec.+Sentani,+Kabupaten+Jayapura,+Papua+99359&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-item">
            <div className="page-item center-content">
              <p
                style={{
                  fontFamily: 'Marck Script',
                  fontWeight: 600,
                  fontSize: '22pt',
                  color: '#CCECF0',
                  margin: '0 0 25px 0',
                  padding: 0,
                  textAlign: 'center',
                  letterSpacing: 0,
                  lineHeight: '1.2',
                }}
              >
                Protokol Kesehatan
              </p>
              <img
                style={{ width: '100%' }}
                src={
                  require('../../../images/covid-protocol.jpg')
                    .default
                }
                alt=""
              />
            </div>
          </div>
          <div className="slider-item">
            <div className="page-item center-content">
              <p
                style={{
                  fontFamily: 'Marck Script',
                  fontWeight: 600,
                  fontSize: '22pt',
                  color: '#CCECF0',
                  margin: '0 0 25px 0',
                  padding: 0,
                  textAlign: 'center',
                  letterSpacing: 0,
                  lineHeight: '1.2',
                }}
              >
                Foto
              </p>
            </div>
          </div>
          <div className="slider-item">
            <div className="page-item center-content">
              <p
                style={{
                  fontFamily: 'Marck Script',
                  fontWeight: 600,
                  fontSize: '22pt',
                  color: '#CCECF0',
                  margin: '0 0 25px 0',
                  padding: 0,
                  textAlign: 'center',
                  letterSpacing: 0,
                  lineHeight: '1.2',
                }}
              >
                Gift
              </p>
              <CardBank
                name="RIANTRI"
                number="121 121 121 121"
                type="mandiri"
              />
            </div>
          </div>
        </Slider>
      </div>
      <Copyright />
      <style>
        {`
          .container-tmp {
            display: flex;
            justify-content: center;
            position: absolute;
            bottom: 0;
            top: 0;
            right: 0;
            left: 0;
            z-index: 900;
            margin: 0;
            background: #EBF3F5;
          }
          .box-slider {
            position: relative;
            min-width: 375px;
            height: 100vh;
            background-image: url(${
              require('../../../images/template-dino-2.png').default
            });
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
          }
          .slider-item {
            display: flex !important;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .slider-item .page-item {
            width: 475px;
            height: 100vh;
            padding: 8rem;
          }
          .slick-dots li {
            width: auto;
            height: 0;
            font-size: 10pt;
            font-weight: 600;
          }
          .slick-dots li div {
            background: #22a6b3;
            color: #fff;
          }
          .slick-dots li.slick-active div {
            background: #95afc0;
          }
          .center-content {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .text-1 {
            font-family: Marck Script;
            font-weight: 600;
            font-size: 22pt;
            color: #CCECF0;
            margin: 0 0 25px 0;
            padding: 0;
            text-align: center;
            letter-spacing: 0;
            line-height: 1.2;
          }

          .text-2 {
            font-family: Fjalla One;
            font-size: 14pt;
            color: #CCECF0;
            margin: 0;
            padding: 0;
            text-align: center;
          }

          @media(max-width: 425px) { 
            .box-slider {
              width: 425px;
            }
            .slider-item .page-item {
              width: 425px;
            }
          }

          @media(max-width: 375px) { 
            .box-slider {
              width: 375px;
            }
            .slider-item .page-item {
              width: 375px;
            }
            .text-1 {
              font-size: 18pt;
            }
            .text-2 {
              font-size: 11pt;
            }
          }
        `}
      </style>
    </>
  )
}
