import React from 'react';

const Country = ({ countryKey, name }) => {

  return (
    <>
      <article className="flag-tile col-12 col-sm-4 col-md-3 col-lg-3 mx-2 my-2">
        <div className="inner-flag-tile mt-4">
          <img className="country-flag-img" src={`https://www.countryflags.io/${countryKey}/flat/64.png`} alt={name} />  
        <h4 className='country-name'>{name}</h4>
        </div>
      </article>
    </>
  )
}

export default Country;
