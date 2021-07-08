import React from 'react';

const Filter = () => {  
  window.addEventListener('DOMContentLoaded', () => {
    const search = document.getElementById('search');

    search.addEventListener('input', (e) => {
      const value = e.target.value;
      const countryName = document.querySelectorAll('.country-name');

      countryName.forEach((name) => {
        if(name.innerText.toLowerCase().includes(value.toLowerCase())) {
          name.parentElement.parentElement.style.display = 'block'
        } else {
          name.parentElement.parentElement.style.display = 'none'
        }
      })
    })
  })

  return (
    <>
    <h2 className="text-center font-weight-bold main-h2">Supported Countries</h2>
    <div className="underline"></div>
      <section className="container text-center my-5">
          <form className="form-inline search-form-margin">
          <input
            className='form-control'
            id='search'
            type='search'
            name='search' 
            placeholder='Search for a country...'
          />
        </form>
      </section>
    </>
  )
}

export default Filter
