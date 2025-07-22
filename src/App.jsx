import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.css";

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    grade: Yup.string().required("Please select a grade"),
    gender: Yup.string().required("Please select your gender"),
});

const StudentForm = () => {
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        setSubmittedData(values);
        resetForm();
    };

    return (
        <div>
            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    password: "",
                    grade: "",
                    gender: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <h2>Student Registration Form</h2>

                        <div>
                            <label>Full Name:</label>
                            <Field name="fullName" type="text" />
                            <ErrorMessage name="fullName" component="div" className="error" />
                        </div>

                        <div>
                            <label>Email:</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div>
                            <label>Password:</label>
                            <Field name="password" type="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>

                        <div>
                            <label>Grade:</label>
                            <Field as="select" name="grade">
                                <option value="">-- Select Grade --</option>
                                <option value="A">A (90-100%)</option>
                                <option value="B">B (80-89%)</option>
                                <option value="C">C (70-79%)</option>
                                <option value="D">D (60-69%)</option>
                                <option value="F">F (0-59%)</option>

                            </Field>
                            <ErrorMessage name="grade" component="div" className="error" />
                        </div>

                        <div>
                            <label>Gender:</label>
                            <label>
                                <Field type="radio" name="gender" value="Male" />
                                Male
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="Female" />
                                Female
                            </label>
                            <label>
                                <Field type="radio" name="gender" value="Other" />
                                Other
                            </label>
                            <ErrorMessage name="gender" component="div" className="error" />
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>

            { }
        </div>
    );
};

export default StudentForm;
