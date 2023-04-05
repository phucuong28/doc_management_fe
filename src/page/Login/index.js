
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.scss"



function Login() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Đăng nhập</h3>
          <div className="form-group mt-3">
            <label>Nhập Email hoặc ID</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email or ID"
            />
          </div>
          <div className="form-group mt-3">
            <label>Nhập Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <a href="forgotPassword">Forgot Password ?</a>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )

}

export default Login