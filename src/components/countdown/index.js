import React from 'react'
import CountDown from 'react-countdown'

/**
 *
 * @param {String} props.date
 * @returns <component />
 */
export default function CountDownTimer({ date, bgColor }) {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <React.Fragment>
        {!completed && (
          <div className="countdown">
            <div className="days">
              <p>{days}</p>
              <p>Hari</p>
            </div>
            <div className="hours">
              <p>{hours}</p>
              <p>Jam</p>
            </div>
            <div className="minutes">
              <p>{minutes}</p>
              <p>Menit</p>
            </div>
            <div className="seconds">
              <p>{seconds}</p>
              <p>Detik</p>
            </div>
            <style>
              {`
                .countdown {
                  display: flex;
                  margin-bottom: 10px;
                }  
                .countdown div.days,
                .countdown div.hours,
                .countdown div.minutes,
                .countdown div.seconds {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                  width: 70px;
                  height: 70px;
                  background: red; 
                  margin: 5px;
                  background: ${bgColor || '#d3cba7'};
                  border-radius: 50%;
                }
                .countdown div.days p,
                .countdown div.hours p,
                .countdown div.minutes p,
                .countdown div.seconds p {
                  margin: 0;
                  color: #777777;
                  
                }
                .countdown div.days p:first-child,
                .countdown div.hours p:first-child,
                .countdown div.minutes p:first-child,
                .countdown div.seconds p:first-child {
                  font-size: 22px;
                  font-weight: bold;
                  color: #000;
                }

                @media(max-width: 425px) {
                  .countdown div.days,
                  .countdown div.hours,
                  .countdown div.minutes,
                  .countdown div.seconds {
                    width: 50px;
                    height: 50px;
                  }

                  .countdown div.days p:first-child,
                  .countdown div.hours p:first-child,
                  .countdown div.minutes p:first-child,
                  .countdown div.seconds p:first-child {
                    font-size: 14px;
                  }
                }
              `}
            </style>
          </div>
        )}
        <button className="btn">
          {completed ? `HARI INI` : `SAVE THE DATE`}
        </button>
      </React.Fragment>
    )
  }
  return <CountDown date={date} renderer={renderer} bgColor={bgColor} />
}
