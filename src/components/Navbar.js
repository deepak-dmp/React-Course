import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar({title="Set Title Here",
    about="Set About",mode,toggleMode}) {
  return (
    <nav className={`navbar bg-${mode} border-bottom border-body navbar-expand-lg bg-body-tertiary`} data-bs-theme={mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active"  aria-current="page" to="/About">{about}</Link>
        </li> */}
      </ul>
      <div className={`form-check form-switch form-check-reverse text-${mode==="light"?"dark":"light"}`}>
        <input className="form-check-input" type="checkbox" onClick={toggleMode} id="switchCheckReverse" />
        <label className="form-check-label" htmlFor="switchCheckReverse">Enable dark mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
};

