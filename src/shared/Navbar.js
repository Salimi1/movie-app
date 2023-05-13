import React from 'react';
import Logo from '../assets/pictures/—Pngtree—vector popcorn icon_4002575.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top p-1 text-white shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={Logo} style={{width: '50px', height: '50px'}} className="fa-solid mb-2 fa-shop me-2" /> <strong>Web movie</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="ms-auto d-none d-lg-block">
                            <div className="input-group">
                            <span className="border-primary input-group-text bg-primary text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                            <input placeholder='What do you search?' type="text" className="form-control border-primary" style={{color: '#7a7a7a'}} />
                            <button className="btn btn-primary text-white">Search</button>
                        </div>
                    </div>
                    <ul className="navbar-nav ms-auto ">
                        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
                            <div className="input-group">
                                <span className="border-primary input-group-text bg-primary text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                                <input type="text" className="form-control border-primary" style={{color: '#7a7a7a'}} />
                                <button className="btn btn-primary text-white">Search</button>
                            </div>
                        </div>
                        <li className="nav-item">
                            <a className="nav-link mx-2 text-uppercase active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a data-bs-toggle='dropdown' className="nav-link mx-2 dropdown-toggle text-uppercase" href="#" aria-expanded="false">Shows</a>
                            <ul className='dropdown-menu'>
                                <li>
                                    <a className='dropdown-item' href='action'>action</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Adventure'>Adventure</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Animation'>Animation</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Comdey'>Comdey</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Crime'>Crime</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Documentary'>Documentary</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Drama'>Drama</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Family'>Family</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Fantasy'>Fantasy</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='History'>History</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Horror'>Horror</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Romance'>Romance</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Science-Fiction'>Science-Fiction</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='TV-Movie'>TV Movie</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Thrailler'>Thrailler</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='War'>War</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='Western'>Western</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2 text-uppercase" href="#">Movies</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <a className="nav-link mx-2 text-dark text-uppercase btn btn-light" href="#"><i className="fa-solid fa-cart-shopping me-1"></i> Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-2 text-light text-uppercase btn btn-primary mt-2 mt-lg-0" href="#"><i className="fa-solid fa-circle-user me-1"></i> Account</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;