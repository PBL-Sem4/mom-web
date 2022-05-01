import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Validators } from "../../utils/index";

const Register = () => {
  const validate = Yup.object({
    email: Validators.email,
    password: Validators.password,
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        confirmPassword: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={() => {}}
    >
      {(formik) => (
        <section class="pt-20">
          <div class="px-6 h-full text-gray-800 dark:text-gray-100">
            <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  class="w-full"
                  alt="Sample image"
                />
              </div>
              <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <Form className="form" onSubmit={formik.handleSubmit}>
                  <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p class="text-center font-semibold text-2xl mx-4 mb-0">
                      Sign Up
                    </p>
                  </div>

                  <div class="mb-6">
                    <TextField placeholder="Name" name="name" type="name" />
                  </div>
                  <div class="mb-6">
                    <TextField placeholder="Email" name="email" type="email" />
                  </div>
                  <div class="mb-6">
                    <TextField
                      placeholder="password"
                      name="password"
                      type="password"
                    />
                  </div>
                  <div class="flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800 dark:text-gray-400"
                        for="exampleCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="#!" class="text-gray-800 dark:text-gray-400">
                      Forgot password?
                    </a>
                  </div>

                  <div class="text-center lg:text-left">
                    <button
                      className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white 0"
                      type="submit"
                    >
                      Login
                    </button>
                    <button
                      className=" bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      type="reset"
                    >
                      Reset
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                      Have an account?
                      <a
                        href="/auth/login"
                        class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >
                        Login
                      </a>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
};

export default Register;
