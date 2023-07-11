import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return  (
        <>
            {/* <!--header--> */}
            <header id="site-header" className="fixed-top">
                {/* <!-- //top header --> */}
                <div className="container">
                    <nav className="navbar navbar-expand-lg stroke px-0 py-lg-0">
                        <h1>
                            <Link className="navbar-brand" to="/">
                                Dige<span className="sub-logo">b</span>
                                <span>iz</span>
                            </Link>
                        </h1>
                       
                        
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mx-lg-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home 
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                
                                <div className="side-menu-hny mt-lg-3">
                                    <label for="op" className="menuopen">
                                        <span className="fa fa-search" aria-hidden="true"></span>
                                    </label>
                                </div>

                            </ul>
                            {/* <!--/right-btn--> */}
                            <div className="top-righthny-buttton">
                                <Link className="btn btn-style btn-white mr-lg-5" to="/contact">
                                Get In Touch <span className="fa fa-long-arrow-right ml-3" aria-hidden="true"></span></Link>
                            </div>
                            {/* <!--/right-btn--> */}
                        </div>
                        
                     {/* <!-- toggle switch for light and dark theme --> */}
                    <div className="mobile-position">
                         <nav className="navigation">
                             <div className="theme-switch-wrapper">
                                 <label className="theme-switch" for="checkbox">
                                     <input type="checkbox" id="checkbox" />
                                     <div className="mode-container">
                                         <i className="gg-sun"></i>
                                         <i className="gg-moon"></i>
                                     </div>
                                 </label>
                            </div>
                         </nav>
                     </div>
                     {/* <!-- //toggle switch for light and dark theme --> */}

                    </nav>
                </div>
            </header>

           <Outlet /> 
        </>
    )
}

export default Layout;


        {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav> */}
            
            
            // <header id="site-header" className="fixed-top">
            //     {/* <!-- //top header --> */}
            //     <div className="container">
            //     <nav className="navbar navbar-expand-lg stroke px-0 py-lg-0">
            //         <h1>
            //             <Link className="navbar-brand" to="/">
            //                 Dige<span className="sub-logo">b</span>
            //                 <span>iz</span>
            //             </Link>
            //         </h1>
            //         {/* <!-- if logo is image enable this    */}
            //     <Link className="navbar-brand" to="/">
            //         <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
            //     </Link>
            //         <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
            //             data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
            //             aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            //             <span className="navbar-toggler-icon fa icon-close fa-times"></span>
            //         </button>

            //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            //             <ul className="navbar-nav mx-lg-auto">
            //                 <li className="nav-item active">
            //                     <Link className="nav-link" to="/">
            //                         Home 
            //                         <span className="sr-only">
            //                             (current)
            //                         </span>
            //                     </Link>
            //                 </li>
            //                 <li className="nav-item">
            //                     <Link className="nav-link" to="/about">About</Link>
            //                 </li>
            //                 <li className="nav-item">
            //                     <Link className="nav-link" to="/services">Services</Link>
            //                 </li>
            //                 <li className="nav-item">
            //                     <Link className="nav-link" to="/contact">Contact</Link>
            //                 </li>
            //                 {/* <!--/search-right--> */}
            //                 <li className="nav-item search-right ml-lg-3">
            //                     {/* <!-- /header-top-inn--> */}
            //                     <div className="menu-overlay-left">
            //                         <div className="two-pops">
            //                             {/* <!-- overlay-menuv-menu --> */}
            //                             <div className="overlay-menuv-hny">
            //                                 <input type="checkbox" id="op" />
            //                                 <div className="side-menu-hny mt-lg-3">
            //                                     <label for="op" className="menuopen">
            //                                         <span className="fa fa-search" aria-hidden="true"></span>
            //                                     </label>
            //                                 </div>
            //                                 <div className="overlay-menuv overlay-menuv-hugeinc">
            //                                     <label for="op" className="menuclose">
            //                                         <span className="fa fa-times" aria-hidden="true"></span>
            //                                     </label>
            //                                     <div className="side-show-content text-left">

            //                                         <div className="quick-links-side mb-5 pt-lg-5">
            //                                             <h3 className="side-title">Search Here</h3>
            //                                             <form action="#" method="post" className="search-box">
            //                                                 <input type="search" placeholder="Keyword" name="search" required="required" autofocus="" />
            //                                                 <button type="submit" className="btn btn-style mt-3">Search</button>
            //                                             </form>
            //                                         </div>

            //                                         <div className="quick-links-side follow-us mb-5">
            //                                         <h3 className="side-title">Follow Us</h3>
            //                                             <ul className="social-icons-top">
            //                                                 <li>
            //                                                     <Link className="facebook" to="/">
            //                                                         <span className="fa fa-facebook" aria-hidden="true">
            //                                                         </span>
            //                                                     </Link>
            //                                                 </li>
            //                                                 <li>
            //                                                     <Link className="twitter" to="/">
            //                                                         <span className="fa fa-twitter" aria-hidden="true">
            //                                                         </span>
            //                                                     </Link>
            //                                                 </li>
            //                                                 <li>
            //                                                     <Link className="google" to="/">
            //                                                         <span className="fa fa-google-plus"aria-hidden="true">
            //                                                         </span>
            //                                                     </Link>
            //                                                 </li>
            //                                                 <li>
            //                                                     <Link className="instagram" to="/">
            //                                                         <span className="fa fa-instagram"
            //                                                             aria-hidden="true">
            //                                                         </span>
            //                                                     </Link>
            //                                                 </li>
            //                                             </ul>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                         {/* <!-- overlay-menuv-menu --> */}
            //                     </div>
            //                 </li>
            //                 {/* <!--//search-right--> */}
            //             </ul>
            //             {/* <!--/right-btn--> */}
            //             <div className="top-righthny-buttton">
            //                 <Link className="btn btn-style btn-white mr-lg-5" to="/contact">
            //                 Get In Touch <span className="fa fa-long-arrow-right ml-3" aria-hidden="true"></span></Link>
            //             </div>
            //             {/* <!--/right-btn--> */}
            //         </div>
            //         {/* <!-- toggle switch for light and dark theme --> */}
            //         <div className="mobile-position">
            //             <nav className="navigation">
            //                 <div className="theme-switch-wrapper">
            //                     <label className="theme-switch" for="checkbox">
            //                         <input type="checkbox" id="checkbox" />
            //                         <div className="mode-container">
            //                             <i className="gg-sun"></i>
            //                             <i className="gg-moon"></i>
            //                         </div>
            //                     </label>
            //                 </div>
            //             </nav>
            //         </div>
            //         {/* <!-- //toggle switch for light and dark theme --> */}
            //     </nav>
            // </div>
            // </header>



