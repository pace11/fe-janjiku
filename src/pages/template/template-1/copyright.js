import React from 'react'

export default function PlayButton() {
  return (
    <div className="copyright">
      <p className="text">
        Made with <i className="fa fa-heart love"></i> by{' '}
        <a href="https://www.instagram.com/janjiku.id/">Janjiku.id</a>
      </p>
      <style>
        {`
            .copyright {
                position: fixed;
                bottom: 20px;
                right: 20px; 
                z-index: 999;
                background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
                background: rgba(204, 204, 204, 0.3);
                padding: 5px;
                border-radius: 30px;
            }
            .copyright p.text {
                margin: 0;
            }
            .copyright p.text i.love {
                color: #db284e;
            }
        `}
      </style>
    </div>
  )
}
