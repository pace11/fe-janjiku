import React from 'react'

export default function Bca(props) {
  return (
    <div className="card-bca">
      <img
        className="bca-logo"
        src={require('../../images/bca-logo.png').default}
        alt="bca-logo"
      />
      <img
        className="mastercard-logo"
        src={require('../../images/mastercard-logo.png').default}
        alt="mastercard-logo"
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
          .card-bca {
            position: relative;
            width: 300px;
            height: 190px;
            background: linear-gradient(112.03deg, #34add8 0%, #1475c2 100%);
            overflow: hidden;
            border-radius: 16px;
          }

          .card-bca img.bca-logo {
            position: absolute;
            width: 80px;
            right: 15px;
            top: 10px;
          }

          .card-bca img.mastercard-logo {
            position: absolute;
            width: 80px;
            bottom: 5px;
            right: 5px;
          }

          .card-bca img.chip-logo {
            position: absolute;
            width: 50px;
            top: 40px;
            left: 20px;
          }
            
          .card-bca .card-name {
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

          .card-bca .card-name .name,
          .card-bca .card-name .number {
            font-family: Roboto;
            color: #f2f2f2;
            margin: 0;
            padding: 0;
          }

          .card-bca .card-name .number {
            font-size: 22px;
            font-weight: 500;
            line-height: 20px;
          }
            
          .card-bca .siluet-1 {
            position: absolute;
            width: 425px;
            height: 171px;
            border-radius: 600px / 200px;
            margin: 98px -20px -61px -78px;
            background: rgba(255, 255, 255, 0.04);
          }
            
          .card-bca .siluet-2 {
            position: absolute;
            width: 335px;
            height: 259px;
            border-radius: 50%;
            margin: 64px 89px -115px -97px;
            background: rgba(255, 255, 255, 0.04);
          }

          @media(max-width: 425px) { 
            .card-bca {
              width: 250px;
            }
          }
        `}
      </style>
    </div>
  )
}
