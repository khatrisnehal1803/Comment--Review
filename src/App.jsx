// import React, { useState } from "react";
// import './style.css';

// const StudentForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     grade: "",
//     gender: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setSubmittedData(formData);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>Student Registration Form</h2>

//         <div>
//           <label>Full Name:</label>
//           <br />
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Email:</label>
//           <br />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Password:</label>
//           <br />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>

//         <div>
//           <label>Grade:</label>
//           <br />
//           <select name="grade" value={formData.grade} onChange={handleChange}>
//             <option value="">-- Select Grade --</option>
//              <option value="A">A (90-100%)</option>
//               <option value="B">B (80-89%)</option>
//               <option value="C">C (70-79%)</option>
//               <option value="D">D (60-69%)</option>
//               <option value="F">F (0-59%)</option>
//           </select>
//         </div>

//         <div>
//           <label>Gender:</label>
//           <br />
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Male"
//               checked={formData.gender === "Male"}
//               onChange={handleChange}
//             />
//             Male
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Female"
//               checked={formData.gender === "Female"}
//               onChange={handleChange}
//             />
//             Female
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Other"
//               checked={formData.gender === "Other"}
//               onChange={handleChange}
//             />
//             Other
//           </label>
//         </div>

//         <button type="submit">Submit</button>
//       </form>

//       {}
//     </div>
//   );
// };

// export default StudentForm;






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
