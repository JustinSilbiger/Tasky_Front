import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Register from './Register';  
import Navigation from '../components/Nav';

function Login() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const handleShowLogin = () => setShowLoginModal(true);
    const handleCloseLogin = () => setShowLoginModal(false);

    const handleShowSignUp = () => setShowSignUpModal(true);
    const handleCloseSignUp = () => setShowSignUpModal(false);

    return (
        <div className="container-fluid bg-dark text-light p-5 min-vh-100">
            <Navigation handleShowLogin={handleShowLogin} handleShowSignUp={handleShowSignUp} />

            <div className="container mt-2">
                <div className="container my-5">
                    <div className="p-3 text-center bg-secondary rounded-3 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-check2-square m-3" viewBox="0 0 16 16">
                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                        </svg>
                        <h1 className="text-light">Tasky</h1>
                        <p className="col-lg-8 mx-auto fs-5 text-light">
                            Welcome to the ultimate productivity hub!
                        </p>
                        <div className="d-inline-flex flex-column flex-md-row gap-2 mb-3">
                            <button onClick={handleShowSignUp} className="btn btn-primary btn-lg px-4 py-2 rounded-pill d-flex align-items-center">
                                Sign up
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle ms-3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
                            </button>
                            <button onClick={handleShowLogin} className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
                                Login
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="mb-4 text-light">How It Works</h2>
                    <p className="lead text-light mb-5">
                        Getting started is quick and easy. Follow these simple steps to begin:
                    </p>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <ol className="list-group list-group-flush text-left bg-dark text-light">
                                <li className="list-group-item mb-3 bg-dark text-light border-light">
                                    <h5><strong>Sign Up:</strong></h5>
                                    <p>Create your free account by clicking "Sign up" above.</p>
                                </li>
                                <li className="list-group-item mb-3 bg-dark text-light border-light">
                                    <h5><strong>Create Tasks:</strong></h5>
                                    <p>Once logged in, create a task with a title and description.</p>
                                </li>
                                <li className="list-group-item mb-3 bg-dark text-light border-light">
                                    <h5><strong>Manage Tasks:</strong></h5>
                                    <p>Edit, complete, or delete tasks easily with the click of a button.</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm bg-secondary text-light">
                            <div className="card-body text-center">
                                <div className="icon mb-3 text-primary">
                                    <i className="bi bi-card-checklist" style={{ fontSize: '2rem' }}></i>
                                </div>
                                <h5 className="card-title">Effortless Task Management</h5>
                                <p className="card-text">
                                    Effortlessly perform CRUD operations: create, update, read, and delete tasks with our user-friendly and intuitive Bootstrap interface.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm bg-secondary text-light">
                            <div className="card-body text-center">
                                <div className="icon mb-3 text-success">
                                    <i className="bi bi-arrows-angle-contract" style={{ fontSize: '2rem' }}></i>
                                </div>
                                <h5 className="card-title">Accessible Anywhere</h5>
                                <p className="card-text">
                                    Use our web-based application on any device with a browser. Stay productive and manage your tasks on the go, no matter where you are.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 border-0 shadow-sm bg-secondary text-light">
                            <div className="card-body text-center">
                                <div className="icon mb-3 text-danger">
                                    <i className="bi bi-shield-lock" style={{ fontSize: '2rem' }}></i>
                                </div>
                                <h5 className="card-title">Secure & Reliable</h5>
                                <p className="card-text">
                                    Your data is kept secure using access and refresh tokens for protected routing. Our reliable system ensures that your tasks are always secure and accessible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

            {/* Login Modal */}
            <div className={`modal fade ${showLoginModal ? 'show' : ''}`} style={{ display: showLoginModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Login</h5>
                            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={handleCloseLogin}></button>
                        </div>
                        <div className="modal-body">
                            <Form route="/api/token/" method="login" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseLogin}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sign Up Modal */}
            <div className={`modal fade ${showSignUpModal ? 'show' : ''}`} style={{ display: showSignUpModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header">
                            <h5 className="modal-title" id="signUpModalLabel">Sign Up</h5>
                            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={handleCloseSignUp}></button>
                        </div>
                        <div className="modal-body">
                            <Register />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseSignUp}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {(showLoginModal || showSignUpModal) && <div className="modal-backdrop fade show" onClick={showLoginModal ? handleCloseLogin : handleCloseSignUp}></div>}
        </div>
    );
}

export default Login;
