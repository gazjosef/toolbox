import { useEffect, useRef, useState } from "react";
import "./styles/main.scss";

function App() {
  const [isActive, setIsActive] = useState(false);

  // const container = document.querySelector(".container");
  // const pwShowHide = document.querySelectorAll(".showHidePw");
  // const pwFields = document.querySelectorAll(".password");

  const containerRef = useRef(null);
  const pwShowHideRef = useRef(null);
  const pwFieldsRef = useRef(null);

  useEffect(() => {
    const pwShowHide = Array.from(document.querySelectorAll("i.showHidePw"));

    console.log(pwShowHide);

    //! NOT WORKING
    // JS Code to show/hide password and change icon
    pwShowHide.forEach((eyeIcon, index) => {
      console.log(index, eyeIcon);

      eyeIcon.addEventListener("click", () => {
        pwFieldsRef.current.forEach((pwField) => {
          if (pwField.type === "password") {
            pwField.type = "text";
            pwShowHideRef.current.forEach((icon) => {
              icon.classList.replace("uil-eye-slash", "uil-eye");
            });
          } else {
            pwField.type = "password";
            pwShowHideRef.current.forEach((icon) => {
              icon.classList.replace("uil-eye", "uil-eye-slash");
            });
          }
        });
      });
    });
  }, []);

  // JS Code to appear signup and login form
  const toggleIsActive = (e) => {
    e.preventDefault();
    setIsActive((current) => !current);
    console.log("isActive: ", isActive);

    if (isActive) {
      containerRef.current.classList.add("active");
    } else {
      containerRef.current.classList.remove("active");
    }
  };

  return (
    <div ref={containerRef} className="container">
      <div className="forms">
        {/* <!-- Login Form --> */}
        <div className="form login">
          <span className="title">Login</span>

          <form action="#">
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter your email"
                autoComplete="current-email"
                required
              />
              <i className="uil uil-envelope icon"></i>
            </div>

            <div className="input-field">
              <input
                ref={pwFieldsRef}
                type="password"
                className="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
              <i className="uil uil-lock icon"></i>
              <i
                ref={pwShowHideRef}
                className="uil uil-eye-slash showHidePw"
              ></i>
            </div>

            <div className="checkbox-text">
              <div className="checkbox-content">
                <input type="checkbox" id="logCheck" />
                <label htmlFor="logCheck" className="text">
                  Remember me
                </label>
              </div>

              <a href="/" className="text">
                Forgot password?
              </a>
            </div>

            <div className="input-field button">
              <input type="button" value="Login Now" />
            </div>
          </form>

          <div className="login-signup">
            <span className="text">
              Not a member?{" "}
              <a onClick={toggleIsActive} href="/" className="text signup-link">
                Signup now
              </a>
            </span>
          </div>
        </div>

        {/* <!-- Registration Form --> */}
        <div className="form signup">
          <span className="title">Registration</span>

          <form action="#">
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter your name"
                autoComplete="new-name"
                required
              />
              <i className="uil uil-user icon"></i>
            </div>

            <div className="input-field">
              <input
                type="text"
                placeholder="Enter your email"
                autoComplete="new-email"
                required
              />
              <i className="uil uil-envelope icon"></i>
            </div>

            <div className="input-field">
              <input
                ref={pwFieldsRef}
                type="password"
                className="password"
                placeholder="Create a new password"
                autoComplete="new-password"
                required
              />
              <i className="uil uil-lock icon"></i>
              <i
                ref={pwShowHideRef}
                className="uil uil-eye-slash showHidePw"
              ></i>
            </div>

            <div className="input-field">
              <input
                ref={pwFieldsRef}
                type="password"
                className="password"
                placeholder="Confirm your password"
                autoComplete="new-password"
                required
              />
              <i className="uil uil-lock icon"></i>
              <i
                ref={pwShowHideRef}
                className="uil uil-eye-slash showHidePw"
              ></i>
            </div>

            <div className="checkbox-text">
              <div className="checkbox-content">
                <input type="checkbox" id="sigCheck" />
                <label htmlFor="sigCheck" className="text">
                  Remember me
                </label>
              </div>

              <a href="/" className="text">
                Forgot password?
              </a>
            </div>

            <div className="input-field button">
              <input type="button" value="Login Now" />
            </div>
          </form>

          <div className="login-signup">
            <span className="text">
              Not a member?
              <a onClick={toggleIsActive} href="/" className="text login-link">
                Signup now
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
