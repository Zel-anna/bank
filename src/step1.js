import { React, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { defaultName, defaultAge, defaultEmail } from './constants.js';

export function Step1(props) {
    const defaultState = {
        name: { error: 'notChanged', value: defaultName },
        age: { error: 'notChanged', value: defaultAge },
        email: { error: 'notChanged', value: defaultEmail }
    }
    const [step1State, setStep1State] = useState(defaultState);

    const nameHandler = (e) => {
        console.log(e.target.value);
        const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        const error = re.test(String(e.target.value).toLowerCase()) ? '' : 'Incorrect name';
        setStep1State({ ...step1State, ...{ name: { error: error, value: e.target.value } } });
    }

    const ageHandler = (e) => {
        console.log(e.target.value);
        const error = (e.target.value > 17 && e.target.value < 121) ? '' : 'Incorrect age';
        setStep1State({ ...step1State, ...{ age: { error: error, value: e.target.value } } });

    }

    const emailHandler = (e) => {
        console.log(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const error = re.test(String(e.target.value).toLowerCase()) ? '' : 'Incorrect e-mail';
        setStep1State({ ...step1State, ...{ email: { error: error, value: e.target.value } } });

    }

    const nameError = step1State.name.error;
    const ageError = step1State.age.error;
    const emailError = step1State.email.error;

    const showNext = !(nameError || ageError || emailError);

    //console.log("showNext = " + showNext);


    const next = () => {
        console.log("--> next");
        props.onValidityChanged(showNext);
        props.onNextStepClicked('step2');
    };

    return <div>
        <h1>Requestor's data:</h1>

        {(nameError) && (nameError !== 'notChanged') && <div style={{ color: 'red' }}>{nameError}</div>}
        <TextField id="inputName" label="Name" variant="outlined" onChange={(event) => nameHandler(event)} /><br /><br />
        {(ageError) && (ageError !== 'notChanged') && <div style={{ color: 'red' }}>{ageError}</div>}
        <TextField id="inputAge" label="Age" variant="outlined" onChange={(event) => ageHandler(event)} /><br /><br />
        {(emailError) && (emailError !== 'notChanged') && <div style={{ color: 'red' }}>{emailError}</div>}
        <TextField id="inputEmail" name="email" label="Email" variant="outlined" onChange={(event) => emailHandler(event)} />
        <br />
        <br />
        <Button variant="contained" color="primary" disabled={!showNext} onClick={next}>Next</Button>

    </div>;
}