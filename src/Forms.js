import { React, useState } from 'react';
import { Step1 } from './step1.js';
import { Step2 } from './step2.js';
import { Grid } from '@material-ui/core';


export default function Forms() {

  const [isStep1Valid, setStep1Valid] = useState(false);
  const [userStepSelected, setUserStepSelected] = useState(null);
  return (
    <Grid container spacing={2}>
      <Grid item md={4} >
        {(!(isStep1Valid && (userStepSelected === null || userStepSelected === 'step2')))
          && <Step1 onValidityChanged={(isValid) => setStep1Valid(isValid)}
            onNextStepClicked={(step) => setUserStepSelected(step)} />}
      </Grid>
      <Grid item md={4}>
        {(isStep1Valid && (userStepSelected === null || userStepSelected === 'step2'))
          && <Step2 onBackStepClicked={(step) => setUserStepSelected(step)} />}
      </Grid>

    </Grid>

  );
}



