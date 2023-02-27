import React from 'react';
import classes from './Pads.module.scss';
import Pad from './Pad/Pad';

const Pads = (props) => {
  const padLayout = [
    {
      keyCode: 81,
      padKey: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    },
    {
      keyCode: 87,
      padKey: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    },
    {
      keyCode: 69,
      padKey: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    },
    {
      keyCode: 65,
      padKey: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    },
    {
      keyCode: 83,
      padKey: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    },
    {
      keyCode: 68,
      padKey: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    },
    {
      keyCode: 90,
      padKey: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    },
    {
      keyCode: 88,
      padKey: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      keyCode: 67,
      padKey: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    },
  ];
  return (
    <div className={classes.Pads}>
      {padLayout.map((pad) => {
        return (
          <Pad
            key={pad.keyCode}
            setDisplay={props.setDisplay}
            keyCode={pad.keyCode}
            id={pad.id}
            padKey={pad.padKey}
            audioClip={pad.url}
          />
        );
      })}
    </div>
  );
};

export default Pads;
