import React from 'react';
import { Slider, Select, MenuItem, Grid, TextField, Button } from '@material-ui/core';
import { arBanks } from './fixtures.js';
import {
  markLoanAmount, markLoanTerm, defaultLoanOffer, defaultBank, defaultAmountValue, defaultTermValue,
  defaultName, defaultAge, defaultEmail, stepAmount, minAmount, maxAmount, stepTerm, minTerm, maxTerm
} from './constants.js';


export default function Forms() {

  const [loanOffer, setLoanOffer] = React.useState(defaultLoanOffer);
  const [bank, setBank] = React.useState(defaultBank);

  const banks = arBanks.map((text, index) => {
    return <option key={index} value={index}>{text}</option>;
  });

  const [sliderAmountValue, setAmount] = React.useState(defaultAmountValue);

  const [sliderTermValue, setTerm] = React.useState(defaultTermValue);

  const [valueName, setName] = React.useState(defaultName);
  const [valueAge, setAge] = React.useState(defaultAge);
  const [valueEmail, setEmail] = React.useState(defaultEmail);
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState('Email не может быть пустым');

  const blurHandler = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
    }
  }

  const submit = () => {
    console.log("--> submit");
    console.log("Chosen loan offer = " + loanOffer);
    console.log("Chosen loan amount = " + sliderAmountValue);
    console.log("Chosen loan term = " + sliderTermValue);
    console.log("Chosen bank = " + arBanks[bank]);
    console.log("Entered name = " + valueName);
    console.log("Entered age = " + valueAge);
    console.log("Entered Email = " + valueEmail);
  };
  return (
    <Grid container spacing={2}>
      <Grid item md={4} >
        <h1>Requestor's data:</h1>
        {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
        <TextField id="inputName" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} /><br /><br />
        <TextField id="inputAge" label="Age" variant="outlined" onChange={(event) => setAge(event.target.value)} /><br /><br />
        <TextField id="inputEmail" name="email" label="Email" variant="outlined" onBlur={e => blurHandler(e)} onChange={(event) => setEmail(event.target.value)} />
      </Grid>
      <Grid item md={4}>
        <div>
          <h1 id="greeting">Choose your credit</h1>
          <p>Choose a loan offer:</p>

          <Select value={loanOffer}
            displayEmpty
            onChange={(event) => setLoanOffer(event.target.value)}>
            <MenuItem value="" disabled>Select a loan offer</MenuItem>
            <MenuItem value={"Cash"}>Cash</MenuItem>
            <MenuItem value={"Credit cards"}>Credit cards</MenuItem>
            <MenuItem value={"Mortgage"}>Mortgage</MenuItem>
            <MenuItem value={"Car loan"}>Car loan</MenuItem>
            <MenuItem value={"Business loan"}>Business loan</MenuItem>
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
          <select value={bank} onChange={(event) => setBank(event.target.value)}>
            {banks}
          </select>

          <br />


          <br />
          <br />

          <Button variant="contained" color="primary" onClick={submit}>Submit</Button>

        </div>
      </Grid>
    </Grid>

  );
}