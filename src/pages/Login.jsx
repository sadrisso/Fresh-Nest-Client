// @flow strict
import * as React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();

  const onSubmit = (data) => {
    console.log(data);

    signIn(data?.email, data?.password)
      .then((userCredential) => {
        console.log("successfully logged in --> ",userCredential?.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="hero pt-5 md:pt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  {...register("email", {
                    required: "Please fill the input field",
                  })}
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  {...register("password", {
                    required: "Please fill the input field",
                  })}
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <p>
                New Here? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
