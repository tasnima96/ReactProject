import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='col-6 col-lg-3'>
                            <h2>Company</h2>
                            <ul>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-6 col-lg-3'>
                            <h2>Support</h2>
                            <ul>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-6 col-lg-3'>
                            <h2>Follow Us</h2>
                            <div className='row'>
                                <div className='col-3 mx-auto'>
                                    <a href='https://www.instagram.com/'><i class="fab fa-instagram fontawesome-style"></i></a>
                                </div>

                                <div className='col-3 mx-auto'>
                                    <a href='https://www.facebook.com/'><i class="fab fa-facebook-f fontawesome-style"></i></a>
                                </div>
                                
                                <div className='col-3 mx-auto'>
                                    <a href='https://www.youtube.com/'><i class="fab fa-youtube fontawesome-style"></i></a>
                                </div>

                                <div className='col-3 mx-auto'>
                                    <a href='https://twitter.com/'><i class="fab fa-twitter fontawesome-style"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className='col-6 col-lg-3'>
                            <h2> Install App</h2>
                            <div className='row'>
                                <div className='col mx-auto'>
                                    <a href='https://www.apple.com/app-store/'><img src='./images/app.jpg'></img></a>
                                    <a href='https://play.google.com/store'><img src='./images/play.jpg'></img></a>
                                    <p className='main-hero-pay'>Secured Payment Gateways</p>
                                    <a href='#'><img src='./images/pay.png'></img></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr></hr>
                    <div className='mt-5'>
                        <p className='main-hero-para text-center w-100'>© 2022, Food Paradise. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer;