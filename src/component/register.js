import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShowPasswordIcon, HidePasswordIcon } from "./icons";

const Register = ({
  emailLabel = "Email address",
  passwordLabel = "Password",
  confirmPasswordLabel = "Confirm password",
  emailPlaceholder = "name@company.com",
  passwordPlaceholder = "••••••••",
  confirmPasswordPlaceholder = "••••••••",
  termsText = "I agree with",
  termsLinkText = "Terms and Conditions",
  termsContent = "Insert your terms and conditions text here...",
  emailErrorText = "Please enter a valid email address.",
  passwordLengthErrorText = "Password must be at least 8 characters long.",
  passwordDigitErrorText = "Password must contain at least one digit.",
  passwordLowercaseErrorText = "Password must contain at least one lowercase letter.",
  passwordUppercaseErrorText = "Password must contain at least one uppercase letter.",
  passwordSpecialCharErrorText = "Password must contain at least one special character.",
  confirmPasswordErrorText = "Passwords do not match.",
}) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [lengthError, setLengthError] = useState("");
  const [digitError, setDigitError] = useState("");
  const [lowercaseError, setLowercaseError] = useState("");
  const [uppercaseError, setUppercaseError] = useState("");
  const [specialCharError, setSpecialCharError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsVisible, setTermsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => {
    const isValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(
      email.trim()
    );
    if (!isValidEmail) {
      setEmailError(emailErrorText);
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    const hasLength = password.length >= 8;
    const hasDigit = /\d/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[@#$%^&.!]/.test(password);

    setLengthError(hasLength ? "" : passwordLengthErrorText);
    setDigitError(hasDigit ? "" : passwordDigitErrorText);
    setLowercaseError(hasLowercase ? "" : passwordLowercaseErrorText);
    setUppercaseError(hasUppercase ? "" : passwordUppercaseErrorText);
    setSpecialCharError(hasSpecialChar ? "" : passwordSpecialCharErrorText);

    return (
      hasLength && hasDigit && hasLowercase && hasUppercase && hasSpecialChar
    );
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError(confirmPasswordErrorText);
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-[#2B3655] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 text-white"
                >
                  {emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#2B3655] border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={emailPlaceholder}
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                />
                <div id="emailError" className="error-message text-red-500">
                  {emailError}
                </div>
              </div>
              {/* password */}
              <div className="relative w-full">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  {passwordLabel}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder={passwordPlaceholder}
                    className="bg-[#2B3655] border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validatePassword(e.target.value);
                    }}
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
                  </div>
                </div>
                <div id="lengthError" className="error-message text-red-500">
                  {lengthError}
                </div>
                <div id="digitError" className="error-message text-red-500">
                  {digitError}
                </div>
                <div id="lowercaseError" className="error-message text-red-500">
                  {lowercaseError}
                </div>
                <div id="uppercaseError" className="error-message text-red-500">
                  {uppercaseError}
                </div>
                <div
                  id="specialCharError"
                  className="error-message text-red-500"
                >
                  {specialCharError}
                </div>
              </div>
              {/* confirm password */}
              <div className="relative">
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  {confirmPasswordLabel}
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm-password"
                    id="confirm-password"
                    placeholder={confirmPasswordPlaceholder}
                    className="bg-[#2B3655] border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      validateConfirmPassword(password, e.target.value);
                    }}
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    {showConfirmPassword ? (
                      <HidePasswordIcon />
                    ) : (
                      <ShowPasswordIcon />
                    )}
                  </div>
                </div>
                <div
                  id="confirmPasswordError"
                  className="error-message text-red-500"
                >
                  {confirmPasswordError}
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="peer w-4 h-4 border border-gray-300 rounded bg-white focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                {/* cheackbox term condition */}
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    {termsText}{" "}
                    <Link
                      className="cursor-pointer font-medium text-primary-600 hover:underline text-[#60C98B]"
                      to="#"
                      id="showTerms"
                      onClick={(e) => {
                        e.preventDefault();
                        setTermsVisible(true);
                      }}
                    >
                      {termsLinkText}
                    </Link>
                  </label>
                </div>

                {/* Popup */}
                {termsVisible && (
                  <div
                    id="termsPopup"
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
                  >
                    <div className="bg-white p-6 rounded-md shadow-lg relative">
                      <button
                        id="closePopup"
                        className="absolute top-2 right-2 px-2 py-1 bg-primary-600 text-white rounded-full hover:bg-primary-700 focus:outline-none"
                        onClick={() => setTermsVisible(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <h2 className="text-lg font-semibold mb-4">
                        {termsLinkText}
                      </h2>
                      <p>{termsContent}</p>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
