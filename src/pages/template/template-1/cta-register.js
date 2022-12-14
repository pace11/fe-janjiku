import React from 'react'

export default function CtaRegister({ onClick }) {
  return (
    <div className="box-cta-register">
      <button className="btn" onClick={onClick}>
        ORDER SEKARANG <i className="fa fa-pencil-alt"></i>
      </button>
      <style>
        {`
          .box-cta-register {
            position: fixed;
            top: 120px;
            left: 20px;
            z-index: 998;
          }
        `}
      </style>
    </div>
  )
}
