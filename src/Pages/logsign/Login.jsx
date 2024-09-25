import React, { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialTab from "../../Components/SocialTab";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

 
  const [disable, setDisable] = useState(true);

  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User logged in successfully!",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, {replace: true})
    });
  };

  const handleCaptcha = e => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      alert("Captcha Matched");
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
      setDisable(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>গাঁওগেরাম হেঁশেল | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm bg-base-100 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    onBlur={handleCaptcha}
                    name="captcha"
                    placeholder=""
                    className="input input-bordered"
                    required
                  />
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={disable}
                  className="btn btn-outline btn-block border-yellow-400"
                  type="submit"
                  value="Log In"
                />
              </div>
            </form>
            <p className="text-center text-yellow-400 mb-5">
              New here?<Link className="ml-2 underline font-bold" to="/signup">Create an Account!</Link>
            </p>
            <SocialTab></SocialTab>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
