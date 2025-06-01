import React, { useState } from 'react';
import './Videoplay.css';
import music from './allen.mp4'
function Videoplay() {
    const [videoSrc, setVideoSrc] = useState(music);

    const videoSlider = (src) => {
        setVideoSrc(src);
    };

    return (
        <>
            <div className="container123">
                <video src={videoSrc} className="slider" autoPlay loop muted controls></video>
                <ul>
                    <li onClick={() => videoSlider(music)}><video src={videoSrc} ></video></li>
                    <li onClick={() => videoSlider(music)}><video src={videoSrc} ></video></li>
                    <li onClick={() => videoSlider(music)}><video src={videoSrc} ></video></li>
                    <li onClick={() => videoSlider(music)}><video src={videoSrc} ></video></li>
                </ul>
                <hr/>
            </div>
        </>
    );
}

export default Videoplay;