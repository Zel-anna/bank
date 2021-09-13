import React from 'react';
import { Slider, Select, MenuItem, Grid, TextField, Button } from '@material-ui/core';
  
  const markLoanAmount = [
    {
      value: 0,
      label: "0"
    },
    {
      value: 5000000,
      label: "5000000"
    },
    {
      value: 10000000,
      label: "10000000"
    }
  ];
  const markLoanTerm = [
    {
      value: 0,
      label: "0"
    },
    {
      value: 5,
      label: "5"
    },
    {
      value: 10,
      label: "10"
    },
    {
      value: 15,
      label: "15"
    },
    {
      value: 20,
      label: "20"
    },
    {
      value: 25,
      label: "25"
    },
    {
      value: 30,
      label: "30"
    }
  ];
  

export default function Forms() {

  const [loanOffer, setLoanOffer] = React.useState("Cash") 
  const updateOffer = (event, loanOffer) => {
    setLoanOffer(event.target.value);
  }

  const arBanks = ['Sberbank', 'VTB Bank', 'Alfa-bank'];
  const [bank, setBank] = React.useState(0);
  const banks = arBanks.map((text, index) => {
      return <option key={index} value={index}>{text}</option>;
  });

  const [sliderAmountValue, setAmount] = React.useState(5000000);
  const handleSliderAmountChanged = (event, valueSlider) => {
    setAmount(valueSlider);
  };

  //let sliderTermValue = 15;
  const [sliderTermValue, setTerm] = React.useState(15);
  const handleSliderTermChanged = (event, valueSlider) => {
    //sliderTermValue = valueSlider;
    setTerm(valueSlider);
  };

  const [valueName, setName] = React.useState('');
  const [valueAge, setAge] = React.useState('');
  const [valueEmail, setEmail] = React.useState('');
  
  const submit = () => {
      console.log ("--> submit");
      console.log ("Chosen loan offer = " + loanOffer);  
      console.log ("Chosen loan amount = " + sliderAmountValue);
      console.log ("Chosen loan term = " + sliderTermValue);
      console.log ("Chosen bank = " + arBanks[bank]);
      console.log ("Entered name = " + valueName);
      console.log ("Entered age = " + valueAge);
      console.log ("Entered Email = " + valueEmail);
  };
    return (
          <Grid container spacing={2}>
            <Grid item md={4} >
              <h1>Requestor's data:</h1>
              <TextField id="inputName" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} /><br/><br/>
              <TextField id="inputAge" label="Age" variant="outlined" onChange={(event) => setAge(event.target.value)}  /><br/><br/>
              <TextField id="inputEmail" label="Email" variant="outlined" onChange={(event) => setEmail(event.target.value)} />
            </Grid>
            <Grid item md={4}>
              <div>
                  <h1 id="greeting">Choose your credit</h1>     
                  <p>Choose a loan offer:</p>

                  <Select value={loanOffer} 
                          displayEmpty
                          onChange= {updateOffer}>
                      <MenuItem value="" disabled>Select a loan offer</MenuItem>
                      <MenuItem value={"Cash"}>Cash</MenuItem>
                      <MenuItem value={"Credit cards"}>Credit cards</MenuItem>
                      <MenuItem value={"Mortgage"}>Mortgage</MenuItem>
                      <MenuItem value={"Car loan"}>Car loan</MenuItem>
                      <MenuItem value={"Business loan"}>Business loan</MenuItem>
                  </Select>
                  <br/>      
                  <br/>

                  <p>Loan amount (rub):</p>
                  <div className="slider">
                  <Slider 
                      defaultValue={5000000}
                      valueLabelDisplay="auto"
                      step={500000}
                      marks={markLoanAmount}
                      min={0}
                      max={10000000}
                      onChange={handleSliderAmountChanged}
                  />
                  </div>
                  <p>Loan term (years):</p>
                  <div className="slider">
                  <Slider 
                      defaultValue={15}
                      valueLabelDisplay="auto"
                      step={1}
                      marks={markLoanTerm}
                      min={0}
                      max={30}
                      onChange={handleSliderTermChanged}
                  />
                  </div>
                  <p>Choose a bank:</p>
                  <select value={bank} onChange={(event) => setBank(event.target.value)}>
                    {banks}
                  </select>

                  <br/>


                  <br/>      
                  <br/>
                  
                  <Button variant="contained" color="primary" onClick = {submit}>Submit</Button>

              </div>      
            </Grid>
          </Grid>
            
        );
}