import "./styles/main.scss";

function App() {
  return (
    <div class="container">
      <div class="forms">
        {/* <!-- Login Form --> */}
        <div class="form login">
          <span class="title">Login</span>

          <form action="#">
            <div class="input-field">
              <input type="text" placeholder="Enter your email" required />
              <i class="uil uil-envelope icon"></i>
            </div>

            <div class="input-field">
              <input
                type="password"
                class="password"
                placeholder="Enter your password"
                required
              />
              <i class="uil uil-lock icon"></i>
              <i class="uil uil-eye-slash showHidePw"></i>
            </div>

            <div class="checkbox-text">
              <div class="checkbox-content">
                <input type="checkbox" id="logCheck" />
                <label for="logCheck" class="text">
                  Remember me
                </label>
              </div>

              <a href="/" class="text">
                Forgot password?
              </a>
            </div>

            <div class="input-field button">
              <input type="button" value="Login Now" />
            </div>
          </form>

          <div class="login-signup">
            <span class="text">
              Not a member?
              <a href="/" class="text signup-link">
                Signup now
              </a>
            </span>
          </div>
        </div>

        {/* <!-- Registration Form --> */}
        <div class="form signup">
          <span class="title">Registration</span>

          <form action="#">
            <div class="input-field">
              <input type="text" placeholder="Enter your name" required />
              <i class="uil uil-user icon"></i>
            </div>

            <div class="input-field">
              <input type="text" placeholder="Enter your email" required />
              <i class="uil uil-envelope icon"></i>
            </div>

            <div class="input-field">
              <input
                type="password"
                class="password"
                placeholder="Create a new password"
                required
              />
              <i class="uil uil-lock icon"></i>
              <i class="uil uil-eye-slash showHidePw"></i>
            </div>

            <div class="input-field">
              <input
                type="password"
                class="password"
                placeholder="Confirm your password"
                required
              />
              <i class="uil uil-lock icon"></i>
              <i class="uil uil-eye-slash showHidePw"></i>
            </div>

            <div class="checkbox-text">
              <div class="checkbox-content">
                <input type="checkbox" id="sigCheck" />
                <label for="sigCheck" class="text">
                  Remember me
                </label>
              </div>

              <a href="/" class="text">
                Forgot password?
              </a>
            </div>

            <div class="input-field button">
              <input type="button" value="Login Now" />
            </div>
          </form>

          <div class="login-signup">
            <span class="text">
              Not a member?
              <a href="/" class="text login-link">
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
