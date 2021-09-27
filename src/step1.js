import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { defaultName, defaultAge, defaultEmail } from './constants.js';

export function Step1() {
    const [valueName, setName] = React.useState(defaultName);
    const [nameError, setNameError] = React.useState('notChanged');

    const [valueAge, setAge] = React.useState(defaultAge);
    const [ageError, setAgeError] = React.useState('notChanged');

    const [valueEmail, setEmail] = React.useState(defaultEmail);
    const [emailError, setEmailError] = React.useState('notChanged');

    const [showNext, setShowNext] = React.useState(false);


    const nameHandler = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
        const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        const error = re.test(String(e.target.value).toLowerCase()) ? '' : 'Incorrect name';
        setNameError(error);
        //updateNext();

    }

    const ageHandler = (e) => {
        setAge(e.target.value);
        console.log(e.target.value);
        const error = (e.target.value > 17 && e.target.value < 121) ? '' : 'Incorrect age';
        setAgeError(error);
        //updateNext();
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const error = re.test(String(e.target.value).toLowerCase()) ? '' : 'Incorrect e-mail';
        setEmailError(error);
        updateNext();
        /* const invalidFields = nameError || ageError || emailError;
        setIsEnabledNext(!invalidFields); */
    }
    const updateNext = () => {
        console.log("nameError: " + nameError);
        console.log("ageError: " + ageError);
        console.log("emailError: " + emailError);
        console.log("nameError || ageError || emailError: " + nameError + "||" + ageError + "||" + emailError);
        setShowNext(!(nameError || ageError || emailError));
        console.log("showNext = " + showNext);
    }

    const next = () => {
        //const error = nameError || ageError || emailError;
        //setIsEnabledNext(!error);
        //const showStep1 = !!(nameError || ageError || emailError);
        //showStep1 && <Step1 />;
        console.log("--> next");
        //console.log("showNext = " + showNext);
        //console.log("showStep1 = " + showStep1);
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