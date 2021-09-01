import React from 'react';
import { Slider, Select, MenuItem, AppBar, Tabs, Tab } from '@material-ui/core';

  
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

    //Объявляем новую переменную состояния value
  const [value, setValue]=React.useState(0);

  const handleTabs = (event, value) => {
    setValue(value);
    console.log("TabsValue: " + value);
  };
  const [bank, setBank] = React.useState(1)
  const updateBank = (event, bank) => {
    console.log(event.target.value);  
    setBank(event.target.value);
  }
  const getValueSlider = (event, value) => {
    console.log(value);
  };
    return (
            <div>
                <h1>Form handling</h1>
                <h1 id="greeting">Choose your credit</h1>     
                <p>List of loan offers</p>

                <AppBar position="static">
                    <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleTabs} 
                    aria-label="nav tabs example"
                    >
                    <Tab label="Cash" />
                    <Tab label="Credit cards" />
                    <Tab label="Mortgage" />
                    <Tab label="Car loan" />
                    <Tab label="Business loan" />
                    </Tabs>
                </AppBar>

                <ul className="categories"> 
                {/*
                    categories.map(category => (
                    <li key={category}>
                        <button onClick={displayCategoryName}>
                        <span role="img" aria-label={category} id={category}>{category}</span>
                        </button>
                        </li>
                    ))*/
                }
                </ul>


                <p>Loan amount (rub):</p>
                <div className="slider">
                <Slider 
                    defaultValue={5000000}
                    valueLabelDisplay="auto"
                    step={500000}
                    marks={markLoanAmount}
                    min={0}
                    max={10000000}
                    onChange={getValueSlider}
                />
                </div>
                <p>Loan term (years):</p>
                <div className="slider">
                <Slider 
                    defaultValue={15}
                    //aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks={markLoanTerm}
                    min={0}
                    max={30}
                    onChange={getValueSlider}
                />
                </div>
                <p>Choose a bank:</p>

                <Select value={bank} 
                        displayEmpty
                        onChange= {updateBank}>
                    <MenuItem value="" disabled>Select a bank</MenuItem>
                    <MenuItem value={1}>Sberbank</MenuItem>
                    <MenuItem value={2}>VTB Bank</MenuItem>
                    <MenuItem value={3}>Alfa-bank</MenuItem>
                </Select>
                <br/>      
                <br/>
                <button>Submit</button>
            </div>
        );
}