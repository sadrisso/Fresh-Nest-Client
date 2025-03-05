 
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Register() {
  const { register, handleSubmit } = useForm();
  const { signUp } = useAuth();

  const onSubmit = (data) => {
    console.log("form data --> ", data);

    const { email, password } = data;

    signUp(email, password)
      .then((userCredential) => {
        console.log("user created --> ",userCredential?.user);
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
            <h1 className="text-4xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                <div>
                  <label className="fieldset-label">Name</label>
                  <input
                    {...register("name", { required: true, minLength: 3 })}
                    type="text"
                    className="input"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="fieldset-label">Email</label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                      },
                    })}
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="fieldset-label">Password</label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
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
