import React from 'react'
import { status } from '../../const'

const DetailInfo = React.memo(({ data }) => {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-12 col-xs-12 card-detail">
        <div className="row rw-detail">
          <span>
            <b>INVOICE</b>
          </span>
          <span>{data?.id}</span>
        </div>
        <div className="row rw-detail">
          <span>
            <b>NAMA</b>
          </span>
          <span>{data?.name}</span>
        </div>
        <div className="row rw-detail">
          <span>
            <b>PHONE</b>
          </span>
          <span>{data?.phone}</span>
        </div>
        <div className="row rw-detail">
          <span>
            <b>PAKET</b>
          </span>
          <span>{data?.packages}</span>
        </div>
        <div className="row rw-detail">
          <span>
            <b>TEMPLATE</b>
          </span>
          <span>{data?.template}</span>
        </div>
        <div className="row rw-detail">
          <span>
            <b>TGL ORDER</b>
          </span>
          <span>{new Date(data?.date).toLocaleString()}</span>
        </div>
        <div className="row rw-detail">
          <span>
            <b>STATUS</b>
          </span>
          <span>{status[data?.status]}</span>
        </div>
      </div>
      <style>
        {`
          .card-detail {
            margin-top: 20px;
            border: 1px solid #e6e8eb;
            border-radius: 5px;
            background: #fff;
          }
          .card-detail .rw-detail {
            display: flex;
            justify-content: space-between;
            padding: 10px;
          }
          .card-detail .rw-detail:not(:last-child) {
            border-bottom: 1px solid #e6e8eb;
          }
        `}
      </style>
    </div>
  )
})

export default DetailInfo
