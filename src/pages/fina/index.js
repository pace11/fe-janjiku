import React, { useState } from 'react'
import CountDown from '../../components/countdown'
import Modal from '../../components/modal'
import Card from "../../components/card-bank";
import Comment from './comment-section'
import CoverInvitation from './cover'
import PlayButton from './play-button'
import Copyright from './copyright'
import { useQuery } from '../../utils'
import audio from '../../sound/raef_you_are_the_one.m4a'

export default function Ryan() {
  const query = useQuery()
  const [isModal, setIsModal] = useState(false)
  const [show, setShow] = useState(true)
  const [music, setMusic] = useState({
    prepare: new Audio(audio),
    playing: false,
  })

  const CloseCover = () => {
    music.prepare.play();
    window.scrollTo(0, 0)
    setMusic({
      ...music,
      playing: true,
    })
    setShow(false)
    setTimeout(() => {
      setIsModal(true)
    }, 1000)
  }

  const HandlePausedMusic = (params) => {
    if (params) {
      music.prepare.pause();
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

  return (
    <React.Fragment>
      <PlayButton
        isPlay={music?.playing}
        onPaused={HandlePausedMusic}
      />
      <CoverInvitation
        show={show}
        to={query.get('to')}
        onHide={CloseCover}
      />
      <section id="part-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 row-1">
              <div className="border">
                <div
                  className="row"
                  data-animate="fadeInRight"
                  data-animate-delay="100"
                >
                  <div className="col-md-12 content-center">
                    <p className="text-1">The Wedding Of</p>
                    <img
                      className="cincin"
                      src={require('../../images/rings.png').default}
                      alt=""
                    />
                    <p className="bride-name">~ Fina & Taufiq ~</p>
                    <p className="desc-1">
                      Kami ingin keluarga dan sahabat semua menjadi
                      bagian di hari istimewa kami 😇
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="img-1"
                src={
                  require('../../images/template-2/flower-1.png')
                    .default
                }
                alt="template-1 type-4"
              />
              <img
                className="img-2"
                src={
                  require('../../images/template-2/flower-2.png')
                    .default
                }
                alt="template-1 type-5"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="part-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 row-2">
              <div className="border2">
                <div
                  className="row"
                  data-animate="fadeInLeft"
                  data-animate-delay="100"
                >
                  <div className="col-md-12 content-center">
                    <p className="text-4">
                      بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                    </p>
                    <p className="text-3">
                      السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ
                      وَبَرَكَاتُهُ
                    </p>
                    <br />
                    <br />
                    <p className="desc-1">
                      Maha suci Allah yang telah menciptakan
                      makhluk-Nya berpasang-pasangan. Dengan memohon
                      Rahmat dan Ridho Allah SWT, kami bermaksud
                      menyelenggarakan Pernikahan Putra-Putri Kami:
                    </p>
                    <p className="text-male">
                      Fina Nurjati, S.T
                      <br />
                      <span>"Fina"</span>
                      <br />
                      <span>
                        Putri bungsu dari Bapak Budiono & Ibu Rita
                        Kumala
                      </span>
                    </p>
                    <p className="and">&</p>
                    <p className="text-female">
                      Taufiq Fathurrizza, S.E
                      <br />
                      <span>"Taufiq"</span>
                      <br />
                      <span>
                        Putra sulung dari Bapak Nuryadin & Ibu Mutingah
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="img-1"
                src={
                  require('../../images/template-3/flower-5.png')
                    .default
                }
                alt="template-1 type-3"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="part-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 row-3">
              <div className="border">
                <div
                  className="row"
                  data-animate="fadeInUp"
                  data-animate-delay="100"
                >
                  <div className="col-md-12 content-center">
                    <p className="text-3">Our Special Events</p>
                    <p className="text-2">Acara Pernikahan</p>
                    <div className="col-md-6">
                      <div className="row box-schedule">
                        <div className="col-md-6">
                          <h4 className="schedule-text">AKAD</h4>
                          <p>
                            <i className="far fa-calendar-alt"></i> 18
                            Desember 2022
                            <br />
                            <i className="far fa-clock"></i> 09:00 WIB
                            <br />
                            <i className="fab fa-instagram"></i> <b>LIVE STREAMING di <a href="https://www.instagram.com/finanurjati/" target="_blank" rel="noreferrer">@finanurjati</a></b>
                          </p>
                          <h5>Kediaman Keluarga Bapak Budiono</h5>
                          <p className="place-address">
                            JL. PONDOK UNGU PERMAI BLOK D 16/16 RT
                            004/RW 013, KEL. KALIABANG TENGAH, KEC.
                            BEKASI UTARA, KOTA BEKASI, 17125
                          </p>
                        </div>
                        <div className="col-md-6">
                          <h4 className="schedule-text">RESEPSI</h4>
                          <p>
                            <i className="far fa-calendar-alt"></i> 18
                            Desember 2022 <br />
                            <i className="far fa-clock"></i> 11:00 - 17:00 WIB
                          </p>
                          <h5>Kediaman Keluarga Bapak Budiono</h5>
                          <p className="place-address">
                            JL. PONDOK UNGU PERMAI BLOK D 16/16 RT
                            004/RW 013, KEL. KALIABANG TENGAH, KEC.
                            BEKASI UTARA, KOTA BEKASI, 17125
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="place-address">
                      Merupakan suatu kehormatan dan kebahagiaan bagi
                      kami apabila Bapak/Ibu/Saudara/i berkenan hadir
                      untuk memberikan do'a restu kepada kedua
                      mempelai <br />
                      Atas kehadirannya dan doa restunya kami ucapkan
                      terima kasih
                    </p>
                    <p className="text-3">
                      وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ
                      وَبَرَكَاتُهُ
                    </p>
                    <div
                      className="col-md-6"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <CountDown
                        date={new Date(
                          '12/18/2022 09:00:00',
                        ).toISOString()}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="img-1"
                src={
                  require('../../images/template-2/flower-3.png')
                    .default
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="part-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 row-4">
              <div className="border2">
                <div
                  className="row"
                  data-animate="fadeInLeft"
                  data-animate-delay="100"
                >
                  <div className="col-md-12 content-center">
                    <p className="text-3">Google Maps</p>
                    <p className="text-2">Lokasi Pernikahan</p>
                    <div className="mapouter">
                      <div className="gmap_canvas">
                        <iframe
                          title="maps-layout"
                          id="gmap_canvas"
                          src="https://maps.google.com/maps?q=Ria+Hari,+Kaliabang+Tengah,+Kec.+Bekasi+Utara,+Kota+Bks,+Jawa+Barat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                          frameBorder="0"
                          scrolling="no"
                          marginHeight="0"
                          marginWidth="0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="part-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 row-5">
              <div className="border">
                <div
                  className="row"
                  data-animate="fadeInUp"
                  data-animate-delay="100"
                >
                  <div className="col-md-12 content-center">
                    <p className="text-3">Our Memories</p>
                    <p className="text-2">Gallery Photo</p>
                    <div className="gallery-photo">
                      <img
                        src={
                          require('../../images/fina/fina-1.jpg')
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <br />
                    <div className="gallery-photo">
                      <img
                        src={
                          require('../../images/fina/fina-2.jpg')
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="img-1"
                src={
                  require('../../images/template-2/flower-1.png')
                    .default
                }
                alt=""
              />
              <img
                className="img-2"
                src={
                  require('../../images/template-2/flower-2.png')
                    .default
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="part-6">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 row-6">
              <div className="border2">
                <div
                  className="row"
                  data-animate="fadeInLeft"
                  data-animate-delay="100"
                >
                  <div className="col-md-12 content-center">
                    <p className="text-3">Wishes</p>
                    <p className="text-2">
                      Berikan ucapan terbaik anda untuk kedua mempelai
                    </p>
                    <Comment />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="part-7">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 row-7">
              <div className="border">
                <div
                  className="row"
                  data-animate="fadeInUp"
                  data-animate-delay="100"
                >
                  <div className="col-md-12 content-center">
                    <p className="text-3">Gift</p>
                    <p className="text-2">Hadiah Pernikahan</p>
                    <p className="desc-1">
                      Untuk keluarga dan sahabat yang ingin mengirimkan hadiah,
                      silahkan dikirimkan melalui:
                    </p>
                    <div className="row content-center">
                      <div className="row m-20">
                        <Card
                          name="TAUFIQ FATHURRIZZA"
                          number="121 000 781 6600"
                          type="mandiri"
                        />
                      </div>
                      <div className="row m-20">
                        <Card
                          name="FINA NURJATI"
                          number="877 065 0021"
                          type="bca"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="img-1"
                src={require("../../images/template-1/type-1.png").default}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Copyright />
      <Modal show={isModal} onHide={() => setIsModal(false)}>
        <img
          style={{ width: '100%', height: '100%' }}
          src={require('../../images/covid-protocol.jpg').default}
          alt=""
        />
      </Modal>
      <style>
        {`
          html::-webkit-scrollbar {
            display: none;
          }

          img.cincin {
            width: 300px;
          }
          .content-center {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .special-to {
            display: inline;
            font-size: 18px;
            border-top: 1px solid #2f3640;
            border-bottom: 1px solid #2f3640;
            margin: 0;
            padding: 5px 0;
            color: #2f3640;
          }

          /* part 1 and row 1 */
          #part-1, #part-3, #part-5, #part-7 {
            background-color: #ede0dd;
          }
          .row-1 {
            position: relative;
            padding: 3rem;
          }
          .row-1 .border {
            border-radius: 20px;
            border: 2px dashed #777777 !important;
            padding: 10px;
          }
          .row-1 .img-1 {
            position: absolute;
            right: 0;
            top: 0;
            width: 200px;
          }
          .row-1 .img-2 {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 150px;
          }

          /* part 2 and row 2 */
          .row-2 {
            position: relative;
            padding: 3rem;
          }
          .row-2 .border2 {
            border-radius: 20px;
            border: 2px dashed #d3cba7 !important;
            padding: 20px 150px;
          }
          .row-2 .img-1 {
            position: absolute;
            right: 15px;
            bottom: 0;
            width: 350px;
          }
          img.couple-1 {
            width: 500px;
            border-radius: 20px;
            margin: 20px 0;
          }


          /* part 3 and row 3 */
          .row-3 {
            position: relative;
            padding: 3rem;
          }
          .row-3 div.border {
            border-radius: 20px;
            border: 2px dashed #777777 !important;
            padding: 150px 20px;
          }
          .row-3 .img-1 {
            position: absolute;
            right: 20px;
            bottom: 0;
            width: 350px;
          }
          .box-schedule .col-md-6:not(:first-child) {
            border-left: 1px solid #d3cba7;
          }
          .box-schedule div h4, h5, p, p.place-address { 
            text-align: center;
          }
          .box-schedule h4.schedule-text {
            position: relative;
          }
          .box-schedule h4.schedule-text::before {
            position: absolute;
            content: "";
            bottom: 5px;
            width: 50px;
            height: 10px;
            border-radius: 20px;
            background: #f8cb30;
            z-index: -1;
          }


          /* part 4 and row 4 */
          .row-4 {
            position: relative;
            padding: 3rem;
          }
          .row-4 .border2 {
            border-radius: 20px;
            border: 2px dashed #d3cba7 !important;
            padding: 20px 150px;
          }
          .mapouter {
            position: relative;
            text-align: right;
            width: 600px;
          }
          .gmap_canvas {
            overflow: hidden;
          }
          .gmap_canvas iframe {
            height: 400px;
          }


          /* part 5 and row 5 */
          .row-5 {
            position: relative;
            padding: 3rem;
          }
          .row-5 .border {
            border-radius: 20px;
            border: 2px dashed #777777 !important;
            padding: 10px;
          }
          .row-5 .img-1 {
            position: absolute;
            right: 0;
            top: 0;
            width: 200px;
          }
          .row-5 .img-2 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200px;
          }
          .gallery-photo img {
            width: 400px;
            height: auto;
          }


          /* part 6 and row 6 */
          .row-6 {
            position: relative;
            padding: 3rem;
          }
          .row-6 .border2 {
            border-radius: 20px;
            border: 2px dashed #d3cba7 !important;
            padding: 20px 150px;
          }
          .box-comment {
            width: 400px;
            height: auto;
            box-sizing: border-box;
          }
          .item-comment-box {
            max-height: 400px;
            overflow-y: scroll;
          }
          .item-comment {
            border-bottom: 1px solid #e6e8eb;
            padding: 10px 0;
          }
          .item-comment:last-child {
            border-bottom: 0px;
          }
          .item-comment div .box-user {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: #dfddd1;
            border-radius: 50%;
          }
          .item-comment div .box-user i {
            font-size: 20px;
          }
          .item-comment div .item-name,
          .item-comment div .item-date,
          .item-comment div .item-content {
            text-align: left;
            margin: 0;
            padding: 0;
          }
          .item-comment div .item-name {
            font-weight: 600;
            color: #333;
          }


          /* part 7 and row 7 */
          .row-7 {
            position: relative;
            padding: 3rem;
          }
          .row-7 .border {
            border-radius: 20px;
            border: 2px dashed #777777 !important;
            padding: 10px;
          }
          .row-7 .img-1 {
            position: absolute;
            left: 0;
            top: 0;
            width: 350px;
            transform: rotate(180deg);
          }
          

          p.text-1 {
            font-family: Great Vibes;
            font-size: 100px;
            font-weight: bold;
            margin: 0;
            padding: 0;
          }
          p.text-2 {
            font-family: Great Vibes;
            font-size: 50px;
            font-weight: bold;
            margin: 0;
            padding: 0;
          }
          p.text-3 {
            font-family: Dosis;
            font-size: 25px;
            margin: 0;
            padding: 0;
          }
          p.bride-name {
            font-family: Marck Script;
            font-size: 40px;
            color: #000;
            margin: 0;
            padding: 0;
          }
          p.desc-1 {
            font-family: Dosis;
            font-size: 20px;
            font-weight: 500;
            margin: 0;
            padding: 0;
          }
          p.text-male {
            font-family: Marck Script;
            font-size: 35px;
            font-weight: 600;
            text-align: center;
            color: #000;
          }
          p.text-male span {
            font-family: Dosis;
            font-size: 20px;
            font-weight: 500;
            color: #777777;
          }
          p.and {
            font-family: Great Vibes;
            font-size: 50px;
            font-weight: 600;
            color: #d65467;
          }
          p.text-female {
            font-family: Marck Script;
            font-size: 35px;
            font-weight: 600;
            text-align: center;
            color: #000;
          }
          p.text-female span {
            font-family: Dosis;
            font-size: 20px;
            font-weight: 500;
            color: #777777;
          }

          @media(max-width: 1024px) {
            img.cincin {
              width: 200px;
            }


            /* part 1 and row 1 */
            .row-1 {
              padding: 2rem;
            }
            .row-1 .border {
              padding: 0 35px;
            }
            .row-1 .img-1 {
              position: absolute;
              right: 0;
              top: 0;
              width: 150px;
            }
            .row-1 .img-2 {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100px;
            }


            /* part 2 and row 2 */
            .row-2 {
              padding: 2rem;
            }
            .row-2 .border2 {
              padding: 20px 35px 120px 35px;
            }
            .row-2 .img-1 {
              position: absolute;
              right: 20px;
              bottom: 0;
              width: 200px;
            }
            img.couple-1 {
              width: 100%;
            }


            /* part 3 and row 3 */
            .row-3 {
              padding: 2rem;
            }
            .row-3 div.border {
              border-radius: 20px;
              padding: 150px 10px;
            }
            .row-3 .img-1 {
              display: none;
            }
            .box-schedule .col-md-6:last-child {
              border-left: 0px;
            }


            /* part 4 and row 4 */
            .row-4 {
              padding: 2rem;
            }
            .row-4 .border2 {
              padding: 10px;
            }
            .mapouter {
              width: 500px;
            }
            .gmap_canvas iframe {
              height: 400px;
            }


            /* part 5 and row 5 */
            .row-5 {
              padding: 2rem;
            }
            .row-5 .border {
              padding: 10px;
            }
            .row-5 .img-1 {
              width: 100px;
            }
            .row-5 .img-2 {
              width: 100px;
            }
            .gallery-photo img {
              // border-radius: 10px;
            }


            /* part 6 and row 6 */
            .row-6 {
              padding: 2rem;
            }
            .row-6 .border2 {
              padding: 15px;
            }
            .box-comment {
              width: 400px;
            }
            .item-comment-box {
              max-height: 300px;
              overflow-y: scroll;
            }
            .item-comment {
              border-bottom: 1px solid #e6e8eb;
              padding: 10px 0;
            }
            .item-comment:last-child {
              border-bottom: 0px;
            }
            .item-comment div .box-user {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 40px;
              height: 40px;
              background: #dfddd1;
              border-radius: 50%;
            }
            .item-comment div .box-user i {
              font-size: 20px;
            }
            .item-comment div .item-name,
            .item-comment div .item-date,
            .item-comment div .item-content {
              text-align: left;
              margin: 0;
              padding: 0;
            }
            .item-comment div .item-name {
              font-weight: 600;
              color: #333;
            }


            /* part 7 and row 7 */
            .row-7 {
              padding: 2rem;
            }
            .row-7 .border {
              padding: 10px;
            }
            .row-7 .img-1 {
              display: none;
            }


            p.text-1 {
              font-size: 30px;
              margin: 40px 0 0 0;
            }
            p.text-2 {
              font-size: 30px;
            }
            p.text-3 {
              font-size: 20px;
            }
            p.bride-name {
              font-size: 25px;
              margin: 5px 0 0 0;
            }
            p.desc-1 {
              font-size: 20px;
            }
            p.text-male {
              font-size: 30px;
              line-height: 30px;
            }
            p.text-male span {
              font-size: 18px;
            }
            p.text-female {
              font-size: 30px;
              line-height: 30px;
            }
            p.text-female span {
              font-size: 18px;
            }
          }

          @media(max-width: 425px) {
            img.cincin {
              width: 100px;
            }


            /* part 1 and row 1 */
            .row-1 {
              padding: 2rem;
            }
            .row-1 .border {
              padding: 0 35px;
            }
            .row-1 .img-1 {
              position: absolute;
              right: 0;
              top: 0;
              width: 100px;
            }
            .row-1 .img-2 {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 80px;
            }


            /* part 2 and row 2 */
            .row-2 {
              padding: 2rem;
            }
            .row-2 .border2 {
              padding: 20px 35px 120px 35px;
            }
            .row-2 .img-1 {
              position: absolute;
              right: 20px;
              bottom: 0;
              width: 150px;
            }
            img.couple-1 {
              width: 100%;
            }


            /* part 3 and row 3 */
            .row-3 {
              padding: 2rem;
            }
            .row-3 div.border {
              border-radius: 20px;
              padding: 10px;
            }
            .row-3 .img-1 {
              display: none;
            }
            .box-schedule .col-md-6:last-child {
              border-left: 0px;
            }


            /* part 4 and row 4 */
            .row-4 {
              padding: 2rem;
            }
            .row-4 .border2 {
              padding: 10px;
            }
            .mapouter {
              width: 230px;
            }
            .gmap_canvas iframe {
              height: 250px;
            }


            /* part 5 and row 5 */
            .row-5 {
              padding: 2rem;
            }
            .row-5 .border {
              padding: 10px;
            }
            .row-5 .img-1 {
              width: 150px;
            }
            .row-5 .img-2 {
              width: 100px;
            }
            .gallery-photo img {
              width: 250px
            }


            /* part 6 and row 6 */
            .row-6 {
              padding: 2rem;
            }
            .row-6 .border2 {
              padding: 15px;
            }
            .box-comment {
              width: 250px;
            }
            .item-comment-box {
              max-height: 300px;
              overflow-y: scroll;
            }
            .item-comment {
              border-bottom: 1px solid #e6e8eb;
              padding: 10px 0;
            }
            .item-comment:last-child {
              border-bottom: 0px;
            }
            .item-comment div .box-user {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 40px;
              height: 40px;
              background: #dfddd1;
              border-radius: 50%;
            }
            .item-comment div .box-user i {
              font-size: 20px;
            }
            .item-comment div .item-name,
            .item-comment div .item-date,
            .item-comment div .item-content {
              text-align: left;
              margin: 0;
              padding: 0;
            }
            .item-comment div .item-name {
              font-weight: 600;
              color: #333;
            }


            /* part 7 and row 7 */
            .row-7 {
              padding: 2rem;
            }
            .row-7 .border {
              padding: 10px;
            }
            .row-7 .img-1 {
              display: none;
            }


            p.text-1 {
              font-size: 30px;
              margin: 40px 0 0 0;
            }
            p.text-2 {
              font-size: 30px;
            }
            p.text-3 {
              font-size: 20px;
            }
            p.bride-name {
              font-size: 25px;
              margin: 5px 0 0 0;
            }
            p.desc-1 {
              font-size: 20px;
            }
            p.text-male {
              font-size: 30px;
              line-height: 30px;
            }
            p.text-male span {
              font-size: 18px;
            }
            p.text-female {
              font-size: 30px;
              line-height: 30px;
            }
            p.text-female span {
              font-size: 18px;
            }
          }
        `}
      </style>
    </React.Fragment>
  )
}
