// @flow strict

import * as React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="hero pt-5 md:pt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset">
                <div>
                  <label className="fieldset-label">Name</label>
                  <input type="text" className="input" placeholder="Name" />
                </div>
                <div>
                  <label className="fieldset-label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                </div>
                <div>
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </form>
              <p>
                Have an Account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;


