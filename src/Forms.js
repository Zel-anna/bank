import React from 'react';
import { arBanks, arLoanOffers } from './fixtures.js';
import { Slider, Select, MenuItem, Grid, TextField, Button, Menu } from '@material-ui/core';
import {
  markLoanAmount, markLoanTerm, defaultLoanOffer, defaultBank, defaultAmountValue, defaultTermValue,
  defaultName, defaultAge, defaultEmail, stepAmount, minAmount, maxAmount, stepTerm, minTerm, maxTerm
} from './constants.js';


export default function Forms() {

  const [loanOffer, setLoanOffer] = React.useState(defaultLoanOffer);
  const loanOffers = arLoanOffers.map((loanOffer, index) => {
    return <MenuItem key={index} value={loanOffer}>{loanOffer}</MenuItem>;
  });


  const [bank, setBank] = React.useState(defaultBank);
  const banks = arBanks.map((bank, index) => {
    return <MenuItem key={index} value={bank}>{bank}</MenuItem>;
  });

  const [sliderAmountValue, setAmount] = React.useState(defaultAmountValue);

  const [sliderTermValue, setTerm] = React.useState(defaultTermValue);

  const [valueName, setName] = React.useState(defaultName);
  const [nameError, setNameError] = React.useState('Name can not be empty');

  const [valueAge, setAge] = React.useState(defaultAge);
  const [ageError, setAgeError] = React.useState('Age can not be empty');

  const [valueEmail, setEmail] = React.useState(defaultEmail);
  const [emailError, setEmailError] = React.useState('Email can not be empty');

  const nameHandler = (e) => {
    setName(e.target.value);
    const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    const error = re.test(String(e.target.value).toLowerCase()) ? '' : 'Incorrect name';
    setNameError(error);
  }

  const ageHandler = (e) => {
    setAge(e.target.value);
    const re = /^[1-9]?[0-9]{1}$|^100$/;
    const error = re.test(String(e.target.value).toLowerCase()) ? '' : 'Incorrect age';
    setAgeError(error);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const error = re.test(String(e.target.value).toLowerCase()) ? '' : 'Incorrect e-mail';
    setEmailError(error);
  }



  const submit = (event) => {
    console.log("--> submit");
    console.log("Chosen loan offer = " + loanOffer);
    console.log("Chosen loan amount = " + sliderAmountValue);
    console.log("Chosen loan term = " + sliderTermValue);
    console.log("Chosen bank = " + bank);
    console.log("Entered name = " + valueName + " " + nameError);
    console.log("Entered age = " + valueAge + " " + ageError);
    console.log("Entered Email = " + valueEmail + " " + emailError);

  };
  return (
    <Grid container spacing={2}>
      <Grid item md={4} >
        <h1>Requestor's data:</h1>

        {(nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
        <TextField id="inputName" label="Name" variant="outlined" onChange={(event) => nameHandler(event)} /><br /><br />
        {(ageError) && <div style={{ color: 'red' }}>{ageError}</div>}
        <TextField id="inputAge" label="Age" variant="outlined" onChange={(event) => ageHandler(event)} /><br /><br />
        {(emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
        <TextField id="inputEmail" name="email" label="Email" variant="outlined" onChange={(event) => emailHandler(event)} />
      </Grid>
      <Grid item md={4}>
        <div>
          <h1 id="greeting">Choose your credit</h1>
          <p>Choose a loan offer:</p>
          <Select value={loanOffer}
            displayEmpty
            onChange={(event) => setLoanOffer(event.target.value)}>
            {loanOffers}
          </Select>
          <br />
          <br />

          <p>Loan amount (rub):</p>
          <div className="slider">
            <Slider
              defaultValue={defaultAmountValue}
              valueLabelDisplay="auto"
              step={stepAmount}
              marks={markLoanAmount}
              min={minAmount}
              max={maxAmount}
              onChange={(_, valueSlider) => setAmount(valueSlider)}
            />
          </div>
          <p>Loan term (years):</p>
          <div className="slider">
            <Slider
              defaultValue={defaultTermValue}
              valueLabelDisplay="auto"
              step={stepTerm}
              marks={markLoanTerm}
              min={minTerm}
              max={maxTerm}
              onChange={(_, valueSlider) => setTerm(valueSlider)}
            />
          </div>
          <p>Choose a bank:</p>
          <Select value={bank}
            displayEmpty
            onChange={(event) => setBank(event.target.value)}>
            {banks}
          </Select>
          <br />
          <br />
          <br />

          <Button variant="contained" color="primary" onClick={submit}>Submit</Button>

        </div>
      </Grid>
    </Grid>

  );
}



