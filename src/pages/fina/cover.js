export default function Cover({ show, to, onHide }) {
  return (
    <div className={`cover ${show ? 'show' : ''}`}>
      <p className="text-1" style={{ fontSize: "50px", color: "#2f3640" }}>The Wedding Of</p>
      <div className="kop-letter">
        <p className="bride-name" style={{ fontSize: "35px", color: "#2f3640" }}>~ Fina & Taufiq ~</p>
        <p className="special-to">
          Special to: <strong>{to !== null ? to : 'You'}</strong>
        </p>
        <p className="cover-desc">
          *mohon maaf apabila ada kesalahan nama dan gelar
        </p>
        <div
          className="row content-center"
          style={{ marginTop: '20px' }}
        >
          <button
            className="btn btn-primary"
            onClick={() => onHide()}
          >
            Open Invitation
          </button>
        </div>
      </div>
      <style>
        {`
            .cover-desc {
                margin: 0;
                padding: 10px 0 0 0;
                font-size: 13px;
                font-style: italic;
                font-weight: 500;
            }
            .cover {
                position: fixed;
                visibility: hidden;
                transition: all 1s ease;
                left: -1000px;
                top: 0;
                bottom: 0;
                z-index: 999;
                background-image: url(${
                  require('../../images/fina/fina-1-front.jpg')
                    .default
                });
                background-color: #fff;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                text-align: center;
            }
            .cover.show {
                visibility: visible;
                opacity: 1;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }
            .kop-letter {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 100px;
            }

            ${
              show &&
              ` html, body .body-inner {
                  margin: 0; 
                  height: 100%; 
                  overflow: hidden;
                }`
            }
          `}
      </style>
    </div>
  )
}
