const Footer = () => {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">About Me</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Projects</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Skills & Certifications</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Contact Me</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Contact</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Email</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Phone</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Location</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Social Media</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">GitHub </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">LinkedIn </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">LeetCode </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">Instagram </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to my newsletter</h5>
                            <p>For updates on my latest projects!</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input
                                    id="newsletter1"
                                    type="text"
                                    className="form-control"
                                    placeholder="Email address"
                                />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© 2024 Harsh Vardhan Sharma. All Rights Reserved.</p>
                    <p style={{ fontSize: "16px", marginTop: "-2px",marginLeft:"400px" }}>Built with React and Bootstrap.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <svg className="bi" width="24" height="24">
                                    <use xlinkHref="#twitter" />
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <svg className="bi" width="24" height="24">
                                    <use xlinkHref="#instagram" />
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <svg className="bi" width="24" height="24">
                                    <use xlinkHref="#facebook" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
