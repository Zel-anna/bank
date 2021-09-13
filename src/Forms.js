import React from 'react';
import { Slider, Select, MenuItem } from '@material-ui/core';

  
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
    console.log(event.target.value);
    setLoanOffer(event.target.value);
  }

  const arOptions = ['Cash', 'Credit cards', 'Mortgage', 'Car loan', 'Business loan'];
  const [value, setValue] = React.useState(0);
  const options = arOptions.map((text, index) => {
      return <option key={index} value={index}>{text}</option>;
  });

  const arBanks = ['Sberbank', 'VTB Bank', 'Alfa-bank'];
  const [bank, setBank] = React.useState(0);
  const banks = arBanks.map((text, index) => {
      return <option key={index} value={index}>{text}</option>;
  });

  let sliderAmountValue = 5000000;
  const handleSliderAmountChanged = (event, valueSlider) => {
    sliderAmountValue = valueSlider;
  };

  let sliderTermValue = 15;
  const handleSliderTermChanged = (event, valueSlider) => {
    sliderTermValue = valueSlider;
  };

  const submit = () => {
      console.log ("--> submit");
      console.log ("Chosen loan offer = " + arOptions[value]);
      console.log ("Chosen loan offer = " + loanOffer);  
      //console.log ("Chosen loan amount = " + valueSlider);
      console.log ("Chosen loan amount = " + sliderAmountValue);
      console.log ("Chosen loan term = " + sliderTermValue);
      console.log ("Chosen bank = " + arBanks[bank]);
  };
    return (
            <div>
                <h1>Form handling</h1>
                <h1 id="greeting">Choose your credit</h1>     
                <p>Choose a loan offer:</p>

                <select value={value} onChange={(event) => setValue(event.target.value)}>
                   {options}
                </select> 
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
                <button onClick = {submit}>Submit</button>
            </div>
        );
}