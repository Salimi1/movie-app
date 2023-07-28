import React from 'react';
import Logo from '../assets/pictures/—Pngtree—vector popcorn icon_4002575.png'
//Logos
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = ({bodyTheme}) => {
    return (
        <div className={`container-fluid mt-5 ${bodyTheme == 'light' ? 'bg-secondary' : 'bg-dark'} text-light p-5`}>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <div className='d-flex align-items-center'>
                        <h4>Web Movie</h4>
                        <img alt='FooterLogo' src={Logo} style={{width: '80px'}}/>
                    </div>
                    <p className='pe-4 mt-4 text-center text-sm-start'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>

                <div className='col-12 col-md-4 p-4'>
                    <table className='table'>
                        <thead class='w-100'>
                            <h4 className='pb-3 text-white'>Information</h4>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-0'>
                                <a role='button' onClick={() => window.scrollTo(0,0)}  className={`${bodyTheme === 'dark' ? 'text-secondary' : 'text-light'} `} style={{textDecoration: 'none'}} >Serien</a>
                                </td>
                                <td className='border-0'>
                                    <a role='button' onClick={() => window.scrollTo(0,0)}  className={`${bodyTheme === 'dark' ? 'text-secondary' : 'text-light'} `} style={{textDecoration: 'none'}}>Filme</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-0'>
                                <a role='button' onClick={() => window.scrollTo(0,0)} className={`${bodyTheme === 'dark' ? 'text-secondary' : 'text-light'} `} style={{textDecoration: 'none'}}>Neuste</a>
                                </td>
                                <td className='border-0'>
                                    <a role='button' onClick={() => window.scrollTo(0,0)}  className={`${bodyTheme === 'dark' ? 'text-secondary' : 'text-light'}`} style={{textDecoration: 'none'}}>Belibste</a>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-0'>
                                <a role='button' onClick={() => window.scrollTo(0,0)}  className={`${bodyTheme === 'dark' ? 'text-secondary' : 'text-light'} `} style={{textDecoration: 'none'}}>Im Kino</a>
                                </td>
                                <td className='border-0'>
                                <a role='button' onClick={() => window.scrollTo(0,0)}  className={`${bodyTheme === 'dark' ? 'text-secondary' : 'text-light'} `} style={{textDecoration: 'none'}}>Winter</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='col-12 col-md-4 p-4 text-center text-md-start'>
                    <h4>Unsere Kontaktswege</h4>
                    <p className='pb-3 my-3'>
                        Um uns erreichen zu konnen, kontaktieren sie uns über folgende Sozial Medien Apps
                    </p>
                    <div className='row d-flex justify-content-evenly justify-content-md-start'>
                        <a href='https://www.instagram.com/salimi_x.3/' className='col-4 text-white rounded-2 text-center' style={{height: '80px',lineHeight: '75px',background: 'radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)'}}><FaInstagram className='' style={{width: '50px', height: '40px'}}/></a>

                        <a href='5' className='ms-s-5 ms-md-3 text-white col-s-4 col-4 rounded-2 text-center' style={{height: '80px',lineHeight: '75px', background: 'linear-gradient(170deg,#0088CC,#00aaff)'}}><FaTelegramPlane className='' style={{width: '50px', height: '40px'}} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;