import React, { useState } from "react";
import decoration from "../assets/Decoration.svg";

function HomeContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",

  });
  const [submitInfo, setSubmitInfo] = useState("");

  const updateForm = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({ 
        ...prevForm, 
        [name]: value 
    }));

    setErrors(prevState => ({
      ...prevState,
      [name]: ""
    }));
  };

  const validate = () => {
    const err = {};
   
    if (!form.email) {
      err.email = "Email is obligatory";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      err.email = "This is invalid email!";
    }

    if (!form.name) {
      err.name = "Name is obligatory, should be one word!";
    } else if (!/^\S+$/g.test(form.name)) {
      err.name = "The name is invalid!";
    }

    if (form.message.length < 120) {
      err.message = "The message should have minimum 120 characters!";
    }


    if (Object.values(err).find(e => e.length)) {
      setErrors(err);
      return false;
    }

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("form sumbitted");
      console.log(form)

      fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);

        }).then(setSubmitInfo(`The message was sent. We contact you soon!`))
        .catch(error => {
          console.log(error);

        });

        console.log(submitInfo)
    }

  };

  return (
    <>
      <section id="contact" className="contact_container container" >
        <div className="leftSideImage"></div>
        <div className="rightSideForm">
            <h1>Contact with us!</h1>
            <img src={decoration} alt="decoration"/>
            <div className="contact_complex">
              <span className="contact__submitInfo">{submitInfo}</span>
            </div>
            <form className="contact__form">
            <div className="contact_name">
               <label>
                  <span>Name:</span>
                  <input
                    className={!errors.name ? "ContactUs_input" : "ContactUs_error"}
                    type="name"
                    name="name"
                    id="name"
                    onChange={updateForm}
                    placeholder="Name"
                    value={form.name}
                    required
                  />
                  <p className="contact_errorText">{errors.name}</p>
                </label>
                <label>
                  <span>Email:</span>
                  <input
                    className={!errors.email ? "ContactUs_input" : "ContactUs_error"}
                    type="email"
                    name="email"
                    id="email"
                    onChange={updateForm}
                    placeholder="Email"
                    value = {form.email}
                    required
                  />
                <p className="contact_errorText">{errors.email}</p>
                </label>
            </div> 
              <label>
                <span>Message:</span>
                <textarea
                    className={!errors.message ? "ContactUs_textarea" : "ContactUs_errorArea"}
                  type="message"
                  value = {form.message}
                  name="message"
                  id="message"
                  onChange={updateForm}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  required
                />
                <p className="contact_errorText">{errors.message}</p>
              </label>
              <div className="buttonSubmit">
                <input
                  className="buttonFormSubmit"
                  type="submit"
                  onClick={handleSubmit}
                  value="Submit"
                />
              </div>
            </form> 
        </div>
      </section>
    </>
  );
}

export default HomeContact;