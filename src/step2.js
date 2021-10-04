import { React, useState } from 'react';
import { arBanks, arLoanOffers } from './fixtures.js';
import { Slider, Select, MenuItem, Button } from '@material-ui/core';
import {
    markLoanAmount, markLoanTerm, defaultLoanOffer, defaultBank, defaultAmountValue, defaultTermValue,
    stepAmount, minAmount, maxAmount, stepTerm, minTerm, maxTerm
} from './constants.js';


export function Step2(props) {
    const [loanOffer, setLoanOffer] = useState(defaultLoanOffer);
    const loanOffers = arLoanOffers.map((loanOffer, index) => {
        return <MenuItem key={index} value={loanOffer}>{loanOffer}</MenuItem>;
    });


    const [bank, setBank] = useState(defaultBank);
    const banks = arBanks.map((bank, index) => {
        return <MenuItem key={index} value={bank}>{bank}</MenuItem>;
    });

    const [sliderAmountValue, setAmount] = useState(defaultAmountValue);
    const [sliderTermValue, setTerm] = useState(defaultTermValue);
    const [termError, setTermError] = useState('');

    const termHandler = (_, valueSlider) => {
        setTerm(valueSlider);
        const error = (valueSlider !== 0) ? '' : 'Incorrect loan term';
        setTermError(error);
    }

    const showSubmit = !termError;
    console.log("showSubmit = " + showSubmit);
    const handleBackClicked = () => {
        console.log("--> back");
        props.onBackClicked();
    }

    const handleSubmitClicked = () => {
        console.log("--> submit");
        console.log("Chosen loan offer = " + loanOffer);
        console.log("Chosen loan amount = " + sliderAmountValue);
        console.log("Chosen loan term = " + sliderTermValue + " " + termError);
        console.log("Chosen bank = " + bank);
        //console.log("Entered name = " + valueName + " " + nameError);
        //console.log("Entered age = " + valueAge + " " + ageError);
        //console.log("Entered Email = " + valueEmail + " " + emailError);

    }

    return <div className={(props.formStep === 'step2') ? '' : 'hidden'}>
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
        {(termError) && <div style={{ color: 'red' }}>{termError}</div>}
        <div className="slider">
            <Slider
                defaultValue={defaultTermValue}
                valueLabelDisplay="auto"
                step={stepTerm}
                marks={markLoanTerm}
                min={minTerm}
                max={maxTerm}
                onChange={(_, valueSlider) => termHandler(_, valueSlider)}
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
        <Button variant="contained" color="primary" onClick={handleBackClicked} >Back</Button>
        <Button variant="contained" color="primary" onClick={handleSubmitClicked} disabled={!showSubmit} >Submit</Button>



    </div>;
}