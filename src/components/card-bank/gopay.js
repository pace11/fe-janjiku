import React, { useState } from 'react'
import { Tooltip } from 'reactstrap'

export default function Gopay(props) {
  const [isOpen, setOpen] = useState(false)

  const handleClickCopied = (show, value) => {
    setOpen(show)
    navigator.clipboard.writeText(value.replace(/\s/g, ''))
    setTimeout(() => {
      setOpen(false)
    }, 1000)
  }
  return (
    <div className="card-gopay">
      <img
        className="bca-logo"
        src={require('../../images/gopay-logo.png').default}
        alt="bca-logo"
      />
      <img
        className="chip-logo"
        src={require('../../images/chip-logo.png').default}
        alt="chip-logo"
      />
      <div className="card-name">
        <p className="name">{props.name}</p>
        <p className="number">
          {props.number}{' '}
          <button
            id="tooltipGopay"
            className="btn btn-xs btn-secondary"
            onClick={() => handleClickCopied(true, props.number)}
          >
            <i className="fas fa-copy fa-1x"></i>
          </button>
        </p>
        <Tooltip
          delay={{ show: 500, hide: 0 }}
          isOpen={isOpen}
          placement="bottom"
          target="tooltipGopay"
        >
          disalin
        </Tooltip>
      </div>
      <div className="siluet-1"></div>
      <div className="siluet-2"></div>
      <style>
        {`
          .card-gopay {
            position: relative;
            width: 300px;
            height: 190px;
            background: linear-gradient(112.03deg, #0389ab 0%, #02add8 100%);
            border-radius: 16px;
            overflow: hidden;
          }

          .card-gopay img.bca-logo {
            position: absolute;
            width: 80px;
            right: 5px;
            top: 8px;
          }

          .card-gopay img.chip-logo {
            position: absolute;
            width: 50px;
            top: 40px;
            left: 20px;
          }
            
          .card-gopay .card-name {
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
            z-index: 999;
          }

          .card-gopay .card-name .name,
          .card-gopay .card-name .number {
            font-family: Roboto;
            color: #f2f2f2;
            margin: 0;
            padding: 0;
          }

          .card-gopay .card-name .number {
            font-size: 22px;
            font-weight: 500;
            line-height: 20px;
          }
            
          .card-gopay .siluet-1 {
            position: absolute;
            width: 425px;
            height: 171px;
            border-radius: 600px / 200px;
            margin: 98px -20px -61px -78px;
            background: rgba(255, 255, 255, 0.04);
          }
            
          .card-gopay .siluet-2 {
            position: absolute;
            width: 335px;
            height: 259px;
            border-radius: 50%;
            margin: 64px 89px -115px -97px;
            background: rgba(255, 255, 255, 0.04);
          }

          @media(max-width: 425px) { 
            .card-gopay {
              width: 250px;
            }
          }
        `}
      </style>
    </div>
  )
}
