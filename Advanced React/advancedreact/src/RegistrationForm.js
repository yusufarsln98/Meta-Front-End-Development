import React from "react";
import "./RegistrationForm.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return ( 
        firstName && 
        validateEmail(email) && 
        password.value.length >= 8 && 
        role !== "role" 
      ); 
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ 
        value: "", 
        isTouched: false 
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    alert(`First name: ${firstName}`);
    alert(`Last name: ${lastName}`);
    alert(`Email: ${email}`);
    alert(`Password: ${password.value}`);
    clearForm();
  };

  
  return (
    <div className="RegistrationForm">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
                value={firstName}
                placeholder="First name" 
                onChange={(e) => setFirstName(e.target.value)} 
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input 
                value={lastName}
                placeholder="Last name" 
                onChange={(e) => setLastName(e.target.value)} 
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
                value={email}
                placeholder="Email address" 
                onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input 
                value={password.value}
                placeholder="Password" 
                type="password"
                onChange={(e) => { 
                    setPassword({ ...password, value: e.target.value }); 
                }} 
                onFocus={() => { 
                    setPassword({ ...password, isTouched: true }); 
                }} 
            />
            {password.isTouched && password.value.length < 8 ? <PasswordErrorMessage /> : null} 

          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}
export default RegistrationForm
