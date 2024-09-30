import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosOpen from "../../hooks/useAxiosOpen";
import img from "../../assets/others/authentication1.png";
import SocialTab from "../../Components/SocialTab";

const SignUp = () => {
  const axiosOpen = useAxiosOpen();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosOpen.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User created successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/login");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>গাঁওগেরাম হেঁশেল | Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content gap-8 lg:gap-20 flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold mb-5">Sign Up!</h1>
            <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 w-1/2 max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">
                    You must provide a valid name
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  name="photoURL"
                  placeholder="mysha.com"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">
                    You must provide a valid Photo Url
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">
                    You must provide a valid email
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 16,
                    pattern:
                      /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />

                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must contain at least one digit,one uppercase,one
                    lowercase and a special character
                  </p>
                )}
                {errors.password?.type === "required" && (
                  <p className="text-red-600">A Strong Password is Required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be 8 characters long..
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 16 characters
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline btn-block"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center mb-5 text-yellow-400">
              Already have an account?
              <Link className="font-bold underline ml-1" to="/login">
                Login Here
              </Link>{" "}
            </p>
            <SocialTab></SocialTab>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
