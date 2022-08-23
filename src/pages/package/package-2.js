import React from 'react'
import { package_two } from '../../const'

export default function Paket2() {
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
                  Kreasikan Undangan Nikahan anda dengan template yang
                  tersedia disini
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
          <div class="col-lg-4 col-md-4 col-md-12">
            <h3 className="text-center m-b-35">Paket 2</h3>
            <div
              id="portfolio"
              className="grid-layout grid-loaded"
              dataMargin="0"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {package_two &&
                package_two.map((item) => (
                  <React.Fragment key={item.id}>
                    <div
                      class="portfolio-item img-zoom ct-photography ct-marketing ct-media"
                      style={{
                        padding: '0px',
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                      }}
                    >
                      <div class="portfolio-item-wrap">
                        <div class="portfolio-image">
                          <a href="#eta">
                            <img src={item.imagePage} alt="" />
                          </a>
                        </div>
                        <div class="portfolio-description">
                          <a
                            title={item.title}
                            data-lightbox="image"
                            href={item.image}
                          >
                            <i class="icon-maximize"></i>
                          </a>
                          <a href={`paket-2/${item.link}/preview`}>
                            <i class="icon-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
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
