import React from 'react';
import { Slider, Select, MenuItem, AppBar, Tabs, Tab } from '@material-ui/core';
import './App.css';

//const displayCategoryName = event => alert(event.target.id);
/*
const categories = [
  "Наличные деньги",
  "Кредитные карты",
  "Ипотека",
  "Автокредит",
  "Бизнес кредит"
];*/

function App() {
  //Объявляем новую переменную состояния value
  const [value, setValue]=React.useState(0);
  //Что будет в handleTabs - новое значение value?
  const handleTabs = (event, value) => {
    setValue(value);
  };
  const [bank, setBank] = React.useState(1)
  const updateBank = (event, bank) => {
    console.log(event.target.value);  
    setBank(event.target.value);
  }
  return (
    <div className="container">
     <h1 id="greeting">My first project</h1>     
     <p>Список кредитных предложений банков</p>

     <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleTabs} //Здесь при смене tab выполнится функция и сохранится новое value?
          aria-label="nav tabs example"
        >
          <Tab label="Наличные деньги" />
          <Tab label="Кредитные карты" />
          <Tab label="Ипотека" />
          <Tab label="Автокредит" />
          <Tab label="Бизнес кредит" />
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


      <p>Сумма кредита:</p>
      <div className="slider">
       <Slider 
          defaultValue={5000000}
          //getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={500000}
          marks
          min={0}
          max={10000000}
       />
       </div>
      <p>Срок кредита:</p>
      <div className="slider">
       <Slider 
          defaultValue={15}
          //getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={30}
       />
       </div>
      <p>Выбрать банк:</p>

      <Select value={bank} 
              displayEmpty
              onChange= {updateBank}>
          <MenuItem value="" disabled>Select a bank</MenuItem>
          <MenuItem value={1}>Сбербанк</MenuItem>
          <MenuItem value={2}>ВТБ</MenuItem>
          <MenuItem value={3}>Альфа-банк</MenuItem>
      </Select>
    </div>
  )
}

export default App;
