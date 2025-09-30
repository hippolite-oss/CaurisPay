import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from "/public/c.svg";
import "./Content8.css";

function Content8() {
    return (
        <section className='content8'>
            <div className='footer-container'>

                {/* Brand & Logo (dans la première colonne à gauche) */}
                <div className='footer-links'>

                    <div className='footer-brand'>
                        <div className='brand-logo'>
                            <img src={logo} alt="CaurisPay Logo" />
                            <h1>CaurisPay</h1>
                        </div>
                        
                    </div>

                   
                        <div className='legal'>
                        <h3>Solutions</h3>
                        <Link to='#'>Small Bussiness</Link>
                        <Link to='#'>Freelancers</Link>
                        <Link to='#'>Customers</Link>
                        <Link to='#'>Taxes</Link>
                    </div>



                     <div className='company'>
                        <h3>Company</h3>
                        <Link to='#'>About Us</Link>
                        <Link to='#'>Career</Link>
                        <Link to='#'>Contact</Link>
                    </div>


                    <div className='learn'>
                        <h3>Learn</h3>
                        <Link to='#'>Blog</Link>
                        <Link to='#'>Ebooks</Link>
                        <Link to='#'>Guides</Link>
                        <Link to='#'>Templates</Link>
                    </div>


                    
                    <div className='social'>
                        <h3>Follow Us</h3>
                        <div className='social-icons'>
                            <a href='#' aria-label='Facebook'><FaFacebookF /></a>
                            <a href='#' aria-label='Twitter'><FaTwitter /></a>
                            <a href='#' aria-label='LinkedIn'><FaLinkedinIn /></a>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className='footer-bottom'>
                    <p>&copy; {new Date().getFullYear()} CaurisPay. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Content8;
