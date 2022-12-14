export default function Cover({ show, to, onHide }) {
  return (
    <div className={`cover ${show ? 'show' : ''}`}>
      <div className="box-cover">
        <p
          style={{
            fontFamily: 'Marck Script',
            fontWeight: 600,
            fontSize: '36pt',
            color: '#E08489',
            margin: 0,
            padding: 0,
            textAlign: 'center',
            letterSpacing: 0,
            lineHeight: '1.2',
          }}
        >
          Happy
        </p>
        <p
          style={{
            fontFamily: 'Marck Script',
            fontWeight: 600,
            fontSize: '36pt',
            color: '#E08489',
            margin: '0 0 40px 0',
            padding: 0,
            textAlign: 'center',
            letterSpacing: 0,
            lineHeight: '1.2',
          }}
        >
          Birthday
        </p>
        <p
          style={{
            fontFamily: 'Fjalla One',
            fontStyle: 'italic',
            fontSize: '12pt',
            color: '#D0C4E1',
            margin: 0,
            padding: 0,
          }}
        >
          YOU ARE INVITED
        </p>
        <p
          style={{
            fontFamily: 'Signika Negative',
            fontWeight: 700,
            fontSize: '20pt',
            color: '#D0C4E1',
            margin: 0,
            padding: 0,
            textAlign: 'center',
          }}
        >
          RIANTRI BIRTHDAY
        </p>
        <p
          style={{
            fontFamily: 'Signika Negative',
            fontWeight: 600,
            fontSize: '10pt',
            color: '#D0C4E1',
            margin: '50px 0 0 0',
            padding: 0,
          }}
        >
          Untuk mu
        </p>
        <p
          style={{
            fontFamily: 'Marck Script',
            fontWeight: 500,
            fontSize: '20pt',
            color: '#D0C4E1',
            margin: 0,
            padding: 0,
          }}
        >
          {to || "Sahabatku"}
        </p>
        <button className="btn btn-sm" onClick={() => onHide(false)}>
          BUKA UNDANGAN
        </button>
      </div>
      <style>
        {`
          .box-cover {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .cover-desc {
            margin: 0;
            padding: 10px 0 0 0;
            font-size: 13px;
            font-style: italic;
            font-weight: 500;
          }
          .cover {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            visibility: hidden;
            transition: all 1s ease-out;
            left: -1500px;
            top: 0;
            bottom: 0;
            z-index: 999;
            background-image: url(${
              require('../../../images/template-dino-2.png').default
            });
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            background-color: #EBF3F5;
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

          @media(max-width: 425px) { 
            .cover {
              background-image: url(${
                require('../../../images/template-dino-2.png')
                  .default
              });
              background-size: contain;
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
