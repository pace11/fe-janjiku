import React from 'react'

export default function Home() {
  return (
    <div className="container-home">
      <section className="background-image p-b-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-home-f1">
              <div
                className="col-lg-5 content-home-f1"
                data-animate="fadeInUp"
                data-animate-delay="100"
              >
                <img
                  className="image-home-f1"
                  src={require('../../images/janjiku-id.png').default}
                  alt=""
                />
                <p className="lead">
                  Kreasikan Undangan Nikahan nikahan anda dengan tampilan yang
                  menarik disini
                </p>
                <p>
                  <i className="fa fa-info-circle"></i> Coming Soon !!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="background-grey">
        <div
          class="row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div class="col-lg-8 col-md-8 col-md-12">
            <div className="container-fluid">
              <div className="row pricing-table">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="plan">
                    <div className="plan-header">
                      <h4>Janjiku Paket 1</h4>
                      <p className="text-muted">
                        Paket ekonomis namun tetap elegan dengan pilihan
                        berbagai tema yang tersedia
                      </p>
                      <div className="plan-price">
                        <sup>Rp</sup>80<sup>.000</sup>
                      </div>
                      <a className="btn btn-outline" href="/#">
                        <i className="icon-shopping-cart"></i> Pilih
                      </a>
                    </div>
                    <div className="plan-list">
                      <ul>
                        <li>
                          <i className="fas fa-check-circle"></i>Bebas Revisi
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Gallery Foto (5
                          foto)
                        </li>
                        <li className="inactive">
                          <i className="fas fa-times-circle"></i>Embed Video
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Backsound sudah
                          disediakan (AutoPlay)
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Fitur Countdown
                          Timer
                        </li>
                        <li className="inactive">
                          <i className="fas fa-times-circle"></i>Fitur Kirim
                          Gift
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Fitur Ucapan
                          dan RSVP (konfirmasi kehadiran)
                        </li>
                        <li className="inactive">
                          <i className="fas fa-times-circle"></i>Embed Map
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="plan featured">
                    <div className="plan-header">
                      <h4>Janjiku Paket 2</h4>
                      <p className="text-muted">
                        Paket deluxe yang laris dipilih karena memiliki fitur
                        lengkap yang bisa ditambahkan di undangan digital anda
                      </p>
                      <div className="plan-price">
                        <sup>Rp</sup>100<sup>.000</sup>
                      </div>
                      <a className="btn" href="/#">
                        <i className="icon-shopping-cart"></i> Pilih
                      </a>
                    </div>
                    <div className="plan-list">
                      <ul>
                        <li>
                          <i className="fas fa-check-circle"></i>Bebas Revisi
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Gallery Foto
                          (10 foto)
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Embed Video
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          Backsound Bebas Request (AutoPlay)
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Fitur Countdown
                          Timer
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Fitur Kirim
                          Gift
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Fitur Ucapan
                          dan RSVP (konfirmasi kehadiran)
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>Embed Map
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>
        {`
          .col-home-f1 {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .content-home-f1 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          }
          img.image-home-f1 {
            width: 200px;
          }
          @media(min-width: 768px) {
            img.image-home-f1 {
              width: 300px;
            }
          }
          @media(min-width: 1024px) {
            img.image-home-f1 {
              width: 400px;
            }
          }
          .plan-list ul li.inactive {
            color: #bdc3c7;
          }
        `}
      </style>
    </div>
  )
}
