import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import DetailInfo from './detail-info'
import { useQuery } from '../../utils'
import { getInvoiceById } from '../../api'

export default function CekStatus() {
  let history = useHistory()
  const [data, setData] = useState(false)
  const [keyword, setKeyword] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const query = useQuery()

  const handleClickSearch = () => {
    history.push({
      pathname: '/cek-status',
      search: `?invoice=${keyword}`,
    })
    setKeyword('')
  }

  useEffect(() => {
    if (query.get('invoice')) {
      setIsLoading(true)
      getInvoiceById(query.get('invoice'))
        .then((res) => {
          if (res?.data.length) {
            setData(res?.data[0])
          } else {
            setData(false)
          }
          setIsLoading(false)
        })
        .catch((err) => console.log(err))
    }
  }, [query])

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
          <div
            className="col-lg-4 col-md-4 col-md-12 text-center p-20"
            data-animate="fadeInLeft"
            data-animate-delay="100"
          >
            <h3>Cek Status</h3>
            <div className="row">
              <div className="col-md-9 col-lg-9 col-xs-9">
                <input
                  className="form-control"
                  placeholder="copas invoice disini ..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onEnter
                />
              </div>
              <div className="col-md-3 col-lg-3 col-xs-3">
                <button
                  className="btn btn-block"
                  onClick={handleClickSearch}
                  disabled={!keyword}
                >
                  Cari
                </button>
              </div>
            </div>
            {isLoading && (
              <div className="row m-t-20">
                <div className="col-md-12 col-lg-12 col-xs-12 text-center">
                  <span
                    className="fas fa-spinner fa-pulse"
                    style={{ fontSize: '100px', color: '#777777' }}
                  ></span>
                  <p className="m-t-10" style={{ fontSize: '16px' }}>
                    Loading
                  </p>
                </div>
              </div>
            )}
            {!isLoading && !data && (
              <div className="row m-t-20">
                <div className="col-md-12 col-lg-12 col-xs-12 text-center">
                  <span
                    className="fa fa-file-alt"
                    style={{ fontSize: '100px', color: '#777777' }}
                  ></span>
                  <p className="m-t-10" style={{ fontSize: '16px' }}>
                    Invoice Not Found
                  </p>
                </div>
              </div>
            )}
            {!isLoading && data && <DetailInfo data={data} />}
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
