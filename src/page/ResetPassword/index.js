import "bootstrap/dist/css/bootstrap.min.css"
import "./ResetPassword.scss"

function ResetPassword() {
    return (
        <div className="Reset-form-container">
            <form className="Reset-form">
                <div className="Reset-form-content">
                    <h3 className="Reset-form-title">Thay đổi mật khẩu</h3>
                    <div className="form-group mt-3">
                        <label>Nhập mật khẩu mới</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter email or ID"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Xác nhận lại mật khẩu</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Xác nhận
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ResetPassword;