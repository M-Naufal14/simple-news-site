function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container">
                <a className="navbar-brand" href="#">
                    NewsPortal
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Beranda
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Politik
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Olahraga
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Teknologi
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
