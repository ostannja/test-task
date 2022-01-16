import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './App.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(5, "Password must be 5 characters at minimum")
    .required()
});

const App = () => {
  return (
    <div className="mt-5 container form-wrapper border border-2 form-rounded px-0 ">
      <div className="form mx-auto">
        <div className="row my-4">
          <div className="col-lg-12 text-left mt-4">
            <p className="text-secondary mb-1 fs-5">Welcome!</p>
            <h2 className="fw-bold mb-3">Join The Community</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={({ setSubmitting }) => {
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="form-group my-4">
                    <label htmlFor="email" className="mb-2 fw-bold">E-Mail or Username</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="e.g.: elonmusk@mars.com "
                      className={`input-icon email form-control form-rounded ${touched.email && errors.email ? "is-invalid" : ""
                        } ${touched.email && !errors.email ? "is-valid" : ""}`}

                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="password" className="mb-2 fw-bold">Password</label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="e.g.: X Æ A-12"
                      className={`input-icon password form-control form-rounded ${touched.password && errors.password ? "is-invalid" : ""
                        } ${touched.password && !errors.password ? "is-valid" : ""}`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block form-rounded button my-4 col-12"
                    disabled={isSubmitting}
                  >
                    <p className="m-0">{isSubmitting ? "Please wait..." : "Sign Up"}</p>
                  </button>
                  <p className="text-secondary link mb-5">Already a member? <a href="https://formik.org/" className="fw-bold">Login here →</a> </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
