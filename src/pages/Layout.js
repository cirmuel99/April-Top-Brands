import { Outlet, Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';


const Layout = () => {
    return  (
        <>
                <div className="container" style={{background: 'black', position: "sticky", 
                    width: '100%', zIndex: 1020, top: 0 }} >
                    <nav className="nav">
                            <Link className="" to="/">
                                <img src="/images/logo_1.png" alt="apt-logo" className="apt-logo"/>
                            </Link>
                        
                        <div className="" style={{display: 'flex', gap: '12em'}}> 
                            <ul className="navList">
                                <li className="">
                                    <Link className="navLink" to="/">
                                        Home 
                                    </Link>
                                </li>
                                <li className="">
                                    <Link className="navLink" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navLink" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navLink" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navLink" to="/team">Team</Link>
                                </li>
                                {/* <div className="" style={{marginLeft: '25px'}}>
                                        <BsSearch />
                                </div> */}
                            </ul>
                            {/* <!--/right-btn--> */}
                            <div className="" style={{marginTop: '40px'}} >
                                <Link className="navButton" to="/contact">
                                Get A Quote <BsArrowRight style={{marginLeft: '10px'}} /></Link>
                            </div>
                        </div>
                     {/* <!-- toggle switch for light and dark theme --> */}
                        {/* <div className="">
                            <BsMoon style={{fontSize: '30px', color: 'red'}} />
                        </div> */}
                    </nav>
                </div>
           <Outlet /> 
        </>
    )
}

export default Layout;