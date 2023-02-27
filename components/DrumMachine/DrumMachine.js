import React, { useState } from 'react';
import classes from './DrumMachine.module.scss';
import Pads from '../../components/Pads/Pads';

const DrumMachine = () => {
  const [display, setDisplay] = useState('');
  return (
    <div id='drum-machine' className={classes.DrumMachine}>
      <Pads setDisplay={setDisplay} />
      <div id='display' className={classes.Display}>
        {display}
      </div>
    </div>
  );
};

export default DrumMachine;
