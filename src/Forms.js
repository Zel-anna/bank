import { React, useState } from 'react';
import { Step1 } from './step1.js';
import { Step2 } from './step2.js';
import { Grid } from '@material-ui/core';


export default function Forms() {

  const [isStep1Valid, setStep1Valid] = useState(false);
  return (
    <Grid container spacing={2}>
      <Grid item md={4} >
        <Step1 cb={(isValid) => setStep1Valid(isValid)} />
      </Grid>
      <Grid item md={4}>
        {isStep1Valid && <Step2 />}
      </Grid>

    </Grid>

  );
}



