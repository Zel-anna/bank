import React from 'react';
import { Step1 } from './step1.js';
import { Step2 } from './step2.js';
import { Grid } from '@material-ui/core';


export default function Forms() {

  return (
    <Grid container spacing={2}>
      <Grid item md={4} >
        <Step1 />

      </Grid>
      <Grid item md={4}>
        <Step2 />
      </Grid>
    </Grid>

  );
}



