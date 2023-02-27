import React, { useEffect, useRef } from 'react';
import classes from './Pad.module.scss';

const Pad = (props) => {
    const audioRef = useRef();
    const handleKeyPress = (e) => {
        if (e.keyCode === props.keyCode) {
            playSound();
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    });
    const playSound = () => {
        audioRef.current.currentTime = 0;
        props.setDisplay(props.id);
        audioRef.current.play();
    };
    return (
        <div onClick={playSound} id={props.id} className='drum-pad'>
            <button id={props.id} className={classes.Pad}>
                {props.padKey}
            </button>
            <audio
                className='clip'
                ref={audioRef}
                id={props.padKey}
                src={props.audioClip}
            ></audio>
        </div>
    );
};

export default Pad;
