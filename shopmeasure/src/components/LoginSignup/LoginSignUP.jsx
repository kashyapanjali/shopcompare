import React, { useState } from 'react';
import './LoginSignUp.css';

const LoginSignUP = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 ">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
              <form>
                {isSignUp && (
                  <div className="form-group">
                    <label htmlFor="formBasicName">Name</label>
                    <input type="text" className="form-control" id="formBasicName" placeholder="Enter name" />
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="formBasicEmail">Email address</label>
                  <input type="email" className="form-control" id="formBasicEmail" placeholder="Enter email" />
                </div>

                <div className="form-group">
                  <label htmlFor="formBasicPassword">Password</label>
                  <input type="password" className="form-control" id="formBasicPassword" placeholder="Password" />
                </div>

                {isSignUp && (
                  <div className="form-group">
                    <label htmlFor="formBasicConfirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="formBasicConfirmPassword" placeholder="Confirm Password" />
                  </div>
                )}

                <button type="submit" className="btn btn-danger w-100">
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                </button>
              </form>
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={switchMode}>
                  {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUP;
