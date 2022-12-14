/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useQuery } from '../../utils'
import { katalog } from '../../const'

export default function Katalog() {
  let history = useHistory()
  const query = useQuery()
  const [listCatalog, setCatalog] = useState()

  useEffect(() => {
    if (query.get('filter') === 'All') {
      setCatalog(katalog)
    } else {
      setCatalog(
        katalog.filter(
          (item) => item.category === query.get('filter'),
        ),
      )
    }
  }, [query])

  useEffect(() => {
    setCatalog(katalog)
  }, [])

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
          className="row"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="col-lg-12 col-xs-12 col-sm-12 col-md-12">
            <h3 className="text-center m-b-35">Katalog</h3>
            <div className="grid-filter text-center mt-5 mb-5">
              <span
                className={`catalog-list ${
                  !query.get('filter') ||
                  query.get('filter') === 'All'
                    ? 'active'
                    : ''
                }`}
                onClick={() => {
                  history.push({
                    pathname: '/katalog',
                  })
                  history.go(0)
                }}
              >
                Semua
              </span>
              {Array.from(
                new Set(katalog.map((item) => item.category)),
              ).map((item) => (
                <span
                  key={String(item)}
                  className={`catalog-list ${
                    query.get('filter') === item ? 'active' : ''
                  }`}
                  onClick={() =>
                    history.push({
                      pathname: '/katalog',
                      search: `?filter=${item}`,
                    })
                  }
                >
                  {item}
                </span>
              ))}
            </div>
            <div
              id="portfolio"
              className="grid-layout grid-loaded"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {listCatalog &&
                listCatalog.map((item) => (
                  <React.Fragment key={item.id}>
                    <div
                      className="portfolio-item img-zoom ct-photography ct-marketing ct-media col-lg-3 col-md-3 col-xs-12 col-sm-12"
                      style={{
                        padding: '0px',
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                      }}
                    >
                      <div className="portfolio-item-wrap">
                        <div className="portfolio-image">
                          <a href="#eta">
                            <img src={item.imagePage} alt="" />
                          </a>
                        </div>
                        <div className="portfolio-description">
                          <a
                            title={item.title}
                            data-lightbox="image"
                            href={item.image}
                          >
                            <i className="icon-maximize"></i>
                          </a>
                          <a href={`${item.link}/preview`}>
                            <i className="icon-link"></i>
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
          .catalog-list {
            font-size: 11pt;
            font-weight: 500;
            background: #e5e5e5;
            padding: 5px;
            margin: 5px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.6s ease;
          }
          .catalog-list.active {
            background: #DF697A;
            color: #fff;
          }
        `}
      </style>
    </div>
  )
}
