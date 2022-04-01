import React from 'react'

export default function Ovo(props) {
  return (
    <div className="card-ovo">
      <img
        className="bca-logo"
        src={require('../../images/ovo-logo.png').default}
        alt="bca-logo"
      />
      <img
        className="chip-logo"
        src={require('../../images/chip-logo.png').default}
        alt="chip-logo"
      />
      <div className="card-name">
        <p className="name">{props.name}</p>
        <p className="number">{props.number}</p>
      </div>
      <div className="siluet-1"></div>
      <div className="siluet-2"></div>
      <style>
        {`
          .card-ovo {
            position: relative;
            width: 300px;
            height: 190px;
            background: linear-gradient(112.03deg, #48398c 0%, #4d2a86 100%);
            border-radius: 16px;
            overflow: hidden;
          }

          .card-ovo img.bca-logo {
            position: absolute;
            width: 80px;
            right: 5px;
            top: 5px;
          }

          .card-ovo img.chip-logo {
            position: absolute;
            width: 50px;
            top: 40px;
            left: 20px;
          }
            
          .card-ovo .card-name {
            position: absolute;
            bottom: 50px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            text-align: left;
          }

          .card-ovo .card-name .name,
          .card-ovo .card-name .number {
            font-family: Roboto;
            color: #f2f2f2;
            margin: 0;
            padding: 0;
          }

          .card-ovo .card-name .number {
            font-size: 22px;
            font-weight: 500;
            line-height: 20px;
          }
            
          .card-ovo .siluet-1 {
            position: absolute;
            width: 425px;
            height: 171px;
            border-radius: 600px / 200px;
            margin: 98px -20px -61px -78px;
            background: rgba(255, 255, 255, 0.04);
          }
            
          .card-ovo .siluet-2 {
            position: absolute;
            width: 335px;
            height: 259px;
            border-radius: 50%;
            margin: 64px 89px -115px -97px;
            background: rgba(255, 255, 255, 0.04);
          }
        `}
      </style>
    </div>
  )
}
