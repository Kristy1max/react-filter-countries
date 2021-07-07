import React, {useState, useEffect} from 'react'

const url = 'https://api.workgenius.com/order/supported-countries';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async() => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
  }
  
  useEffect(() => {
    fetchCountryData()
  }, [])

  return (
    <>
    <h2 className="text-center font-weight-bold mb-5">Supported Countries</h2>
    <section className="container text-center">
      <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-4">
        {countries.map((country) => {
          const { key, name } = country;

          return (
            <article className="flag-tile col-12 col-sm-4 col-md-3 col-lg-3 mx-2 my-2" key={key}>
              <div className="inner-flag-tile mt-4">
              <div>
                <img className="country-flag-img" src={`https://www.countryflags.io/${key}/flat/64.png`} alt={name} />
              </div>
              
              <h4>{name}</h4>
              </div>
            </article>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default Countries
