import logo from '../../assets/logo.png';
export default function Navbar({ setTab, tab, login }) {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Navbar brand */}
                    <a className="navbar-brand" href="#">
                        <img
                            src={logo}
                            style={{ borderRadius: "50%" }}
                            height={50}
                            alt=""
                            loading="lazy"
                        />
                    </a>
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" onClick={() => setTab('home')}>
                                <a className={`nav-link ${tab == 'home' && 'active'}`} aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item" onClick={() => setTab('explore')}>
                                <a className={`nav-link ${tab == 'explore' && 'active'}`} href="#">
                                    Explore Arts
                                </a>
                            </li>
                            <li className="nav-item" onClick={() => setTab('artist')}>
                                <a className={`nav-link ${tab == 'artist' && 'active'}`} href="#">
                                    Artists
                                </a>
                            </li>

                        </ul>
                        <form className="d-flex input-group w-auto">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Art"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-primary"
                                type="button"
                                data-mdb-ripple-color="dark"
                                style={{ padding: ".45rem 1.5rem .35rem" }}
                            >
                                Search
                            </button>
                        </form>

                        {
                            login ? <ul className="navbar-nav mb-2 mb-lg-0">

                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                                            className="rounded-circle img-fluid"
                                            height={40}
                                            width={40}
                                        />
                                    </a>
                                    {/* Dropdown menu */}

                                    <ul
                                        className="dropdown-menu dropdown-menu-end p-1"
                                        aria-labelledby="navbarDropdown"
                                    >

                                        <li onClick={() => setTab("profile")}>
                                            <a className="dropdown-item" href="#">
                                                My Profile
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Log Out
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul> : <>
                                <div className="d-flex align-items-center">
                                    <button data-mdb-ripple-init type="button" className="btn btn-link px-3 me-2"
                                    onClick={()=>setTab('login')}
                                    >
                                        Login
                                    </button>
                                    <button
                                    onClick={()=>setTab('signup')}
                                    data-mdb-ripple-init type="button" className="btn btn-primary me-3">
                                        Sign up for free
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </>

    );
}
