import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import Footer from "../Footer/Footer";
export default function Contact() {
  const form = useRef();
  const [isLoading, setLoading] = useState(false);
  const contactForm = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      comment: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      emailjs
        .sendForm(
          "service_6fseo4l",
          "template_quoxoco",
          form.current,
          "9SwDbWkBybuvos5EX"
        )

        .then(
          function () {
            setLoading(false);
            Swal.fire({
              position: "center",
              icon: "success",
              title: `Thanks for your submission ${values.firstName}, we will get back to you shortly!`,
              showConfirmButton: false,
              timer: 1500,
            });
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 characters"),
    }),
  });
  return (
    <div id="Contact">
      <div className="head">
        <h1>Send me a message!</h1>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      </div>
      <div className="contactBody">
        <form ref={form} onSubmit={contactForm.handleSubmit}>
          <div>
            <div>
              <label>Your Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                {...contactForm.getFieldProps("firstName")}
                placeholder="Enter Your name"
              />

              {contactForm.errors.firstName && contactForm.touched.firstName ? (
                <p>{contactForm.errors.firstName}</p>
              ) : null}
            </div>
            <div>
              <label>Email Address</label>
              <input
                type="email"
                {...contactForm.getFieldProps("email")}
                placeholder="Enter Your Email Address"
              />
              {contactForm.errors.email && contactForm.touched.email ? (
                <p>{contactForm.errors.email}</p>
              ) : null}
            </div>
          </div>
          <div>
            <div>
              <label>Your Message</label>
              <textarea
                {...contactForm.getFieldProps("comment")}
                name="comment"
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"></textarea>
              {contactForm.errors.comment && contactForm.touched.comment ? (
                <p>{contactForm.errors.comment}</p>
              ) : null}
            </div>
          </div>
          <button type="submit">
            {isLoading ? (
              <div class="progress-bar"></div>
            ) : (
              <>
                {" "}
                <svg
                  width="72"
                  height="22"
                  viewBox="0 0 72 22"
                  stroke="#4831d4"
                  xmlns="http://www.w3.org/2000/svg"
                  class="bow-arrow">
                  <path
                    fill="none"
                    stroke-width="2"
                    stroke-miterlimit="0"
                    d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path>
                </svg>
                <span>Submit</span>
              </>
            )}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
