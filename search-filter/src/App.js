import React, { useState } from 'react';
import JsonData from './MOCK_DATA.json';
import './App.css'

function App() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='app'>
      <h1 className='app-heading'>Search Filter</h1>
      <div className='search-bar-container'>
        <input type="text" placeholder='Search.....' onChange={(event) => { setSearchValue(event.target.value) }} />
        {JsonData.filter((val) => {
          if (searchValue == '') return val;
          else if (val.first_name.toLowerCase().includes(searchValue.toLowerCase())) {
            return val
          }
        }).map((value, map) => {
          return (
            <div className='user'>
              <p>
                {`${value.first_name} ${value.last_name}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App