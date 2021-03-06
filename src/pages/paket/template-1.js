import React, { useState } from 'react'
import CountDown from '../../components/countdown'
import Card from '../../components/card-bank'
import Modal from '../../components/modal'

export default function Template1(props) {
  const listGreeting = [
    {
      name: 'Erlangga',
      content: 'Samawa kalian ya !!!',
      attend: 'n',
      created_at: '2021-05-24T17:05:53.000000Z',
      updated_at: '2021-05-24T17:05:53.000000Z',
    },
    {
      name: 'Firman',
      content: 'Samawa kalian ya !!!',
      attend: 'y',
      created_at: '2021-05-24T17:05:53.000000Z',
      updated_at: '2021-05-24T17:05:53.000000Z',
    },
    {
      name: 'Rehan',
      content: 'Samawa kalian ya !!!',
      attend: 'y',
      created_at: '2021-05-24T17:05:47.000000Z',
      updated_at: '2021-05-24T17:05:47.000000Z',
    },
    {
      name: 'Umar',
      content: 'Samawa kalian ya !!!',
      attend: 'y',
      created_at: '2021-05-24T17:05:43.000000Z',
      updated_at: '2021-05-24T17:05:43.000000Z',
    },
    {
      name: 'Hafiza',
      content: 'Samawa kalian ya !!!',
      attend: 'y',
      created_at: '2021-05-24T17:05:26.000000Z',
      updated_at: '2021-05-24T17:05:26.000000Z',
    },
  ]
  const [show, setShow] = useState(false)

  return (
    <React.Fragment>
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
                    <p className="bride-name">~ Hasim & Clarita ~</p>
                    <p className="desc-1">
                      Kami ingin kalian semua menjadi bagian di hari istimewa
                      kami ????
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="img-1"
                src={require('../../images/template-1/type-4.png').default}
                alt="template-1 type-4"
              />
              <img
                className="img-2"
                src={require('../../images/template-1/type-5.png').default}
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
                    <p className="text-2">Assalamualaikum Wr. Wb.</p>
                    <p className="desc-1">
                      Maha suci Allah yang telah menciptakan makhluk-Nya
                      berpasang-pasangan. Dengan memohon Rahmat dan Ridho Allah
                      SWT, kami bermaksud menyelenggarakan Resepsi Pernikahan
                      Putra-Putri Kami:
                    </p>
                    <img
                      className="couple-1"
                      src={
                        require('../../images/example/prewedding-8.jpeg')
                          .default
                      }
                      alt=""
                    />
                    <p className="text-male">
                      Hasim Sadraq
                      <br />
                      <span>Putra dari Bapak Dzakir & Ibu Sofiah</span>
                    </p>
                    <p className="and">&</p>
                    <p className="text-female">
                      Clarita <br />
                      <span>Putri dari Bapak Thomas & Ibu Febia</span>
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="img-1"
                src={require('../../images/template-1/type-3.png').default}
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
                            <i className="far fa-clock"></i> 08:00 - 09:00 WIB{' '}
                            <br />
                            <i className="far fa-calendar-alt"></i> 31 Desember
                            2022
                          </p>
                          <h5>Hotel Papua Indah</h5>
                          <p className="place-address">
                            Jln. Gerilyawan No.18 Papua
                          </p>
                        </div>
                        <div className="col-md-6">
                          <h4 className="schedule-text">RESEPSI</h4>
                          <p>
                            <i className="far fa-clock"></i> 13:00 - 15:00 WIB{' '}
                            <br />
                            <i className="far fa-calendar-alt"></i> 31 Desember
                            2022
                          </p>
                          <h5>Hotel Papua Indah</h5>
                          <p className="place-address">
                            Jln. Gerilyawan No.18 Papua
                          </p>
                        </div>
                      </div>
                    </div>
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
                        date={new Date('2021-10-08:23:34:00').toISOString()}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="img-1"
                src={require('../../images/template-1/type-1.png').default}
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
                          src="https://maps.google.com/maps?q=Gelora+Bung+Karno+Main+Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
                    <div className="col-md-6 gallery-photo">
                      <img
                        src={
                          require('../../images/example/prewedding-1.jpeg')
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 gallery-photo">
                      <img
                        src={
                          require('../../images/example/prewedding-6.jpeg')
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 gallery-photo">
                      <img
                        src={
                          require('../../images/example/prewedding-4.jpeg')
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 gallery-photo">
                      <img
                        src={
                          require('../../images/example/prewedding-2.jpeg')
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 gallery-photo">
                      <img
                        src={
                          require('../../images/example/prewedding-5.jpeg')
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 gallery-photo">
                      <img
                        src={
                          require('../../images/example/prewedding-3.jpeg')
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-md-6 gallery-photo">
                      <img
                        src={
                          require('../../images/example/prewedding-7.jpeg')
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <br />
                    <br />
                    <p className="text-2">Video</p>
                  </div>
                </div>
              </div>
              <img
                className="img-1"
                src={require('../../images/template-1/type-5.png').default}
                alt=""
              />
              <img
                className="img-2"
                src={require('../../images/template-1/type-5.png').default}
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
                    <div className="box-comment">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Nama</label>
                            <input
                              placeholder="cth: Ryan ..."
                              className="form-control"
                              disabled
                            />
                          </div>
                          <div className="form-group">
                            <label>Pesan</label>
                            <textarea
                              type="text"
                              placeholder="cth: Samawa ya ..."
                              className="form-control"
                              style={{ resize: 'none' }}
                              disabled
                            />
                          </div>
                          <div className="form-group">
                            <label>Konfirmasi Kehadiran</label>
                            <select className="form-control" disabled>
                              <option>Hadir</option>
                              <option>Tidak Hadir</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <button
                              className="btn btn-dark btn-block"
                              onClick={() => console.log('dadada')}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 item-comment-box">
                          {listGreeting &&
                            listGreeting.map((item, i) => (
                              <div key={String(i)} className="row item-comment">
                                <div className="col-lg-2 col-md-2 col-xs-2">
                                  <span className="box-user">
                                    <i className="fas fa-user"></i>
                                  </span>
                                </div>
                                <div className="col-lg-10 col-md-10 col-xs-10">
                                  <p className="item-name">
                                    {item.name}{' '}
                                    <span
                                      className={`badge ${
                                        item.attend === 'y'
                                          ? 'badge-success'
                                          : 'badge-secondary'
                                      }`}
                                    >
                                      <i
                                        className={`fas ${
                                          item.attend === 'y'
                                            ? 'fa-check-circle'
                                            : 'fa-times-circle'
                                        }`}
                                      ></i>{' '}
                                      {item.attend === 'y'
                                        ? 'Hadir'
                                        : 'Tidak Hadir'}
                                    </span>
                                  </p>
                                  <p className="item-date">
                                    <i className="far fa-clock"></i>{' '}
                                    {new Date(item.created_at).toDateString()}
                                  </p>
                                  <p className="item-content">{item.content}</p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
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
                      Untuk keluarga dan sahabat yang ini mengirimkan hadiah,
                      silahkan kirimkan melalui:
                    </p>
                    <div className="row content-center">
                      <div className="col-md-12">
                        <button className="btn" onClick={() => setShow(true)}>
                          Transfer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="img-1"
                src={require('../../images/template-1/type-1.png').default}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={() => setShow(false)}>
        <div className="row">
          <div
            className="col-md-12"
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10px 0',
            }}
          >
            <Card
              name="M IRIANSYAH PRATAMA"
              number="1234 5678 1011"
              type="gopay"
            />
          </div>
          <div
            className="col-md-12"
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10px 0',
            }}
          >
            <Card
              name="M IRIANSYAH PRATAMA"
              number="1234 5678 1011"
              type="ovo"
            />
          </div>
          <div
            className="col-md-12"
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10px 0',
            }}
          >
            <Card
              name="M IRIANSYAH PRATAMA"
              number="1234 5678 1011"
              type="mandiri"
            />
          </div>
        </div>
      </Modal>
      <style>
        {`
          img.cincin {
            width: 300px;
          }
          .content-center {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }


          /* part 1 and row 1 */
          #part-1, #part-3, #part-5, #part-7 {
            background-color: #dfddd1;
          }
          .row-1 {
            position: relative;
            padding: 3rem;
          }
          .row-1 .border {
            border-radius: 20px;
            border: 3px double #777777 !important;
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
            border: 3px double #d3cba7 !important;
            padding: 20px 150px;
          }
          .row-2 .img-1 {
            position: absolute;
            right: 20px;
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
            border: 3px double #777777 !important;
            padding: 10px;
          }
          .row-3 .img-1 {
            position: absolute;
            right: 20px;
            bottom: 0;
            width: 350px;
          }
          .box-schedule .col-md-6:last-child {
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
            border: 3px double #d3cba7 !important;
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
            border: 3px double #777777 !important;
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
            width: 100%;
            height: auto;
            border-radius: 20px;
            margin: 0 0 10px 0;
          }


          /* part 6 and row 6 */
          .row-6 {
            position: relative;
            padding: 3rem;
          }
          .row-6 .border2 {
            border-radius: 20px;
            border: 3px double #d3cba7 !important;
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
            border: 3px double #777777 !important;
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
            font-family: Great Vibes;
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
            font-family: Great Vibes;
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
            font-family: Great Vibes;
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
              width: 70px;
            }
            .row-5 .img-2 {
              width: 70px;
            }
            .gallery-photo img {
              border-radius: 10px;
            }


            /* part 6 and row 6 */
            .row-6 {
              padding: 2rem;
            }
            .row-6 .border2 {
              padding: 15px;
            }
            .box-comment {
              width: 100%;
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
              border-radius: 10px;
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
        `}
      </style>
    </React.Fragment>
  )
}
