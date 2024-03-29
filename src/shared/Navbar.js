import React, { useState, createContext } from 'react';
import Logo from '../assets/pictures/logo.png'
import { Link } from 'react-router-dom'
//Icons
import { AiOutlineDelete } from "react-icons/ai";

export const searchBoxValueContext = createContext()
const Navbar = ({onChange, bodyTheme, setBodyThemeHandler}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      onChange(newValue)
    }
    return (
        <div>
            <nav className={`navbar navbar-${bodyTheme} d-fixed navbar-expand-lg bg-${bodyTheme} sticky-top p-1 text-white shadow-sm`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="home"><img alt='NavbarLogo' src={Logo} style={{width: '50px', height: '50px'}} className="fa-solid mb-2 fa-shop me-2" /> <strong>Web movie</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="ms-auto d-none d-lg-block">
                            <div className="input-group">
                            <span className="border-primary input-group-text bg-primary text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                            <input value={inputValue} onChange={handleInputChange} placeholder='Was suchst du?' type="text" className="form-control position-relative border-primary" style={{color: '#7a7a7a'}} />
                            <AiOutlineDelete onClick={() => setInputValue('') & onChange('')} role='button' style={{top: '10px', left: '5px'}} className='position-absolute text-white' />
                            <button className="btn btn-primary text-white">Suchen</button>
                        </div>
                    </div>
                    <ul className="navbar-nav ms-auto ">
                        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
                            <div className="input-group me-4">
                                <span className="border-primary input-group-text bg-primary text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                                <input value={inputValue} onChange={handleInputChange} placeholder='Was suchst du?' type="text" className="form-control position-relative border-primary" style={{color: '#7a7a7a'}} />
                                <AiOutlineDelete onClick={(e) => setInputValue('') & onChange('') & e.preventDefault()} role='button' style={{top: '10px', left: '5px'}} className='position-absolute text-white' />

                                <button  className="btn btn-primary text-white">Search</button>
                            </div>
                        </div>
                        <li className="nav-item">
                            <Link className="nav-link mx-2 text-uppercase active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link data-bs-toggle='dropdown' className="nav-link mx-2 dropdown-toggle text-uppercase" to="#" aria-expanded="false">Serien</Link>
                            <ul className='dropdown-menu'>
                                <li>
                                    <Link className='dropdown-item' to='shows/16'>Animation</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='shows/35'>Comdey</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='shows/80'>Crime</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='shows/99'>Documentary</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='shows/18'>Drama</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='shows/10751'>Family</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='shows/9648'>Mystery</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='shows/10749'>Romance</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='shows/878'>Science-Fiction</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='shows/37'>Western</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link data-bs-toggle='dropdown' className="nav-link mx-2 dropdown-toggle text-uppercase" to="#" aria-expanded="false">Filme</Link>
                            <ul className='dropdown-menu'>
                                <li>
                                    <Link className='dropdown-item' to='movies/28'>Action</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/12'>Adventure</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/16'>Animation</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/35'>Comedy</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/80'>Crime</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/99'>Documentary</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/18'>Drama</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/10751'>Family</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/14'>Fantasy</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/36'>History</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/27'>Horror</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/10402'>Music</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/9648'>Mystery</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/10749'>Romance</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/878'>Science Fiction</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/10770'>TV Movie</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/53'>Thriller</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/10752'>War</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='movies/37'>Western</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className='form-check ms-2 ms-s-0 mt-1 mb-2 form-switch'>
                        <input type='checkbox' role="switch" onChange={() => setBodyThemeHandler()} className='form-check-input' />
                    </div>
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item dropdown">
                            <Link className={`nav-link mx-2 text-${bodyTheme} text-uppercase btn ${bodyTheme === 'dark' ? 'btn-light' : 'btn-secondary'}`}  to="account/login"><i className="fa-solid fa-cart-shopping me-1"></i> Anmelden</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2 text-light text-uppercase btn btn-primary mt-2 mt-lg-0" to="account/registrieren"><i className="fa-solid fa-circle-user me-1"></i>Registrieren</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
