import { React, useState } from 'react';
import { Step1 } from './step1.js';
import { Step2 } from './step2.js';
import { Grid } from '@material-ui/core';


export default function Forms() {
  const [formStep, setFormStep] = useState('step1');
  return (
    <Grid container spacing={2}>
      <Grid item md={4} >
        <Step1
          onNextClicked={() => setFormStep('step2')}
          formStep={formStep} />
      </Grid>
      <Grid item md={4}>
        <Step2
          onBackClicked={() => setFormStep('step1')}
          formStep={formStep} />
      </Grid>
    </Grid>
  );
}
