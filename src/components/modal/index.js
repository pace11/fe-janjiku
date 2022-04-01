import React from 'react'

export default function Modal(props) {
  return (
    <div className={`janjiku-modal ${props.show ? 'show' : ''}`}>
      <div
        className={`janjiku-modal-bg-filter ${props.show ? 'show' : ''}`}
        onClick={() => props.onHide()}
      ></div>
      <div className="row janjiku-modal-content">
        <div className="col-md-12 janjiku-modal-row">{props.children}</div>
      </div>
      <style>
        {`
          .janjiku-modal-bg-filter {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0,0,0,0.5);
            opacity: 0;
            visibility: hidden;
            transition: all 0.2s ease;
            z-index: 998;
          }

          .janjiku-modal-content {
            position: fixed;
            top: -250px;
            left: 0;
            right: 0;
            opacity: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden; 
            transition: all 0.3s ease-in-out;
            z-index: 999;
            margin: 20% auto;
            background: transparent;
            border: 0;
            width: 500px !important;
            height: auto;
          }

          .janjiku-modal-row {
            width: 500px;
            max-height: 500px;
            overflow-y: scroll;
            background: #fff;
            padding: 10px;
            border-radius: 4px;
            box-sizing: border-box;
            -webkit-box-shadow: 0px 0px 36px -9px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 0px 36px -9px rgba(0,0,0,0.75);
            box-shadow: 0px 0px 36px -9px rgba(0,0,0,0.75);
          }

          ${
            props.show &&
            ` html, body .body-inner {
              margin: 0; 
              height: 100%; 
              overflow: hidden;
            }`
          }

          .janjiku-modal.show > .janjiku-modal-bg-filter {
            opacity: 1 !important;
            visibility: visible !important; 
          }

          .janjiku-modal.show > .janjiku-modal-content {
            opacity: 1 !important;
            visibility: visible !important; 
            top: -200px;
          }

          @media(max-width: 425px) {
            .janjiku-modal-content { 
              top: -50px;
              width: 100% !important;
              box-sizing: border-box;
            }
            .janjiku-modal.show > .janjiku-modal-content {
              opacity: 1 !important;
              visibility: visible !important; 
              top: 0;
            }
            .janjiku-modal-row {
              max-height: 350px;
            }
          }
        `}
      </style>
    </div>
  )
}
