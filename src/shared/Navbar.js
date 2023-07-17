import React, { useEffect, useRef, useState, createContext } from 'react';
import Logo from '../assets/pictures/—Pngtree—vector popcorn icon_4002575.png'
import { Link } from 'react-router-dom'

export const searchBoxValueContext = createContext()
const Navbar = ({onChange}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      onChange(newValue)
    }
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top p-1 text-white shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="home"><img src={Logo} style={{width: '50px', height: '50px'}} className="fa-solid mb-2 fa-shop me-2" /> <strong>Web movie</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="ms-auto d-none d-lg-block">
                            <div className="input-group">
                            <span className="border-primary input-group-text bg-primary text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                            <input onBlur={() => setInputValue('') & onChange('')} value={inputValue} onChange={handleInputChange} placeholder='Was suchst du?' type="text" className="form-control border-primary" style={{color: '#7a7a7a'}} />
                            <button className="btn btn-primary text-white">Search</button>
                        </div>
                    </div>
                    <ul className="navbar-nav ms-auto ">
                        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
                            <div className="input-group">
                                <span className="border-primary input-group-text bg-primary text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                                <input onBlur={() => setInputValue('') & onChange('')} onChange={handleInputChange} type="text" placeholder='Was suchst du?' className="form-control border-primary" style={{color: '#7a7a7a'}} />
                                <button className="btn btn-primary text-white">Search</button>
                            </div>
                        </div>
                        <li className="nav-item">
                            <Link className="nav-link mx-2 text-uppercase active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link data-bs-toggle='dropdown' className="nav-link mx-2 dropdown-toggle text-uppercase" to="#" aria-expanded="false">Shows</Link>
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
                        <li className="nav-item">
                            <Link className="nav-link mx-2 text-uppercase" to="#">Movies</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <Link className="nav-link mx-2 text-dark text-uppercase btn btn-light" to="#"><i className="fa-solid fa-cart-shopping me-1"></i> Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mx-2 text-light text-uppercase btn btn-primary mt-2 mt-lg-0" to="#"><i className="fa-solid fa-circle-user me-1"></i> Account</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;