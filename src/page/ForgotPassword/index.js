
import "bootstrap/dist/css/bootstrap.min.css"
import "./ForgotPassword.scss"

function ForgotPassword() {
    return (
        <div className="Forgot-form-container">
            <form className="Forgot-form">
                <div className="Forgot-form-content">
                    <h3 className="Forgot-form-title">Thay đổi mật khẩu</h3>
                    <div className="form-group mt-3">
                        <label>Nhập email để thay đổi mật khẩu</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Gửi
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )

}

export default ForgotPassword;