export default function Cover({ show, to, onHide }) {
  return (
    <div className={`cover ${show ? 'show' : ''}`}>
      <p className="text-1" style={{ fontSize: "40px", color: "#2f3640" }}>The Wedding Of</p>
      <div className="kop-letter">
        <p className="bride-name" style={{ fontSize: "30px", color: "#2f3640" }}>~ Afni & Rehan ~</p>
        <p className="special-to">
          Special to: <strong>{to !== null ? to : 'You'}</strong>
        </p>
        <p className="cover-desc">
          *mohon maaf apabila ada kesalahan nama dan gelar
        </p>
      </div>
      <div className='btn-cta-open'>
        <button
          className="btn btn-primary"
          onClick={() => onHide()}
        >
          Open Invitation
        </button>
      </div>
      <style>
        {`
            .cover-desc {
              margin: 0;
              padding: 10px 0 0 0;
              font-size: 12px;
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
                require('../../images/rehan/rehan-2.jpg')
                  .default
              });
              background-color: #f9f9f9;
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
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
            }
            .btn-cta-open {
              position: fixed;
              left: 0;
              right: 0;
              bottom: 50px;
            }

            @media(max-width: 425px) { 
              .cover {
                background-image: url(${
                  require('../../images/rehan/rehan-2.jpg')
                    .default
                });
                background-size: cover;
              }
              .btn-cta-open {
                bottom: 60px;
              }
              .kop-letter {
                margin-top: -20px;
              }
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
