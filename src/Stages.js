import React, {useContext} from 'react';
import {
  Stepper,
} from '@material-ui/core';

import Stage from './Stage';

import {DataContext} from './Data.context';

function Stages() {
  const {data, loadData, activeStage} = useContext(DataContext);
  if (data.length === 0) loadData();

  const stages = data.slice(1).map((stageData, index) =>
    <Stage key={index} stageIndex={index} />
  );

  return (
    <Stepper activeStep={activeStage} orientation="vertical">
      {stages}
    </Stepper>
  );
};

export default Stages;
