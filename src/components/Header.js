import React from 'react'

function Header() {
  return (
    <>
      <header className="header">
        <div className="container d-flex justify-content-start">
          <div className="row">
            <a href="https://www.workgenius.com/en-us" target="_blank" rel="noreferrer">
              <img className="col logo" src="https://www.workgenius.com/wp-content/themes/workgenius/images/logo-blue.svg" alt="Logo" />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
