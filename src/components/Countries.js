import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Country from './Country';

function Countries() {

  const [ countries, setCountries ] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.workgenius.com/order/supported-countries')
    .then(res => {
      setCountries(res.data.sort((a, b) => a.name.localeCompare(b.name)))
    }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCountries = countries.filter(country => 
      country.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

  return (
    <>
    <h2 className="text-center font-weight-bold main-h2">Supported Countries</h2>
    <div className="underline"></div>
      <section className="container text-center my-5">
          <form className="form-inline search-form-margin">
          <input
            className='form-control'
            id='search'
            type='text'
            name='search' 
            placeholder='Search for a country...'
            onChange={handleChange}
          />
        </form>
      </section>

      <section className="container text-center">
        <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-4 countries-row">

          {filteredCountries.map(country => {
            return (
              <Country key={country.key} countryKey={country.key} name={country.name}/>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Countries;
