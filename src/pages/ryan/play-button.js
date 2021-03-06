import React from "react";

export default function PlayButton({ isPlay, onPaused }) {
    return (
        <div className="sound-play">
            <i className={`fa ${isPlay ? "fa-pause-circle" : "fa-play-circle"}`} onClick={() => onPaused(isPlay)}></i>
            <span><i className="fa fa-music"></i></span>
            <style>
                {`
                    .sound-play {
                        position: fixed;
                        display: flex;
                        align-items: center;
                        z-index: 999;
                        top: 20px;
                        left: 20px;
                        width: auto;
                        height: auto;
                        background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
                        background: rgba(204, 204, 204, 0.3);
                        padding: 5px;
                        border-radius: 30px;
                    }
                    .sound-play i {
                        font-size: 30px;
                    }
                    .sound-play span {
                        margin-left: 5px;
                        font-size: 14px;
                    }
                    .sound-play:hover {
                        background: rgba(204, 204, 204, 0.6);
                        cursor: pointer;
                    }
                    .sound-play span i {
                        font-size: 14px;
                    }
                `}
            </style>
        </div>
    )
}