import React, {useContext} from 'react';
import {
  Step,
  StepLabel,
  StepContent,
  Typography,
} from '@material-ui/core';

import {DataContext} from './Data.context';

function Stage({
  stageIndex,
  ...props
}) {
  const {
    activeStage,
    setActiveStage,
    getStageLabel,
    getStageContent,
    getSectionTitle,
  } = useContext(DataContext);
  const label = getStageLabel({stageIndex: stageIndex + 1});
  const contentData = getStageContent({stageIndex: stageIndex + 1});
  const content = contentData.slice(1).map((section, sectionIndex) => {
    const sectionTitle = getSectionTitle({sectionIndex: sectionIndex + 1});
    return (
      <div>
        <Typography variant='h6'>{sectionTitle}</Typography>
        <Typography gutterBottom>
          {section}
        </Typography>
      </div>
    );
  });

  return (
    <Step {...props} onClick={()=>setActiveStage(stageIndex)}>
      <StepLabel>
        {label}
      </StepLabel>
      <StepContent>
        <Typography>{content}</Typography>
      </StepContent>
    </Step>
  );
};

export default Stage;
