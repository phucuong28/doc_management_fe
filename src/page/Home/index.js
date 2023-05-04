import "./Home.scss"
import banner from "~/assets/logo/banner_slogan.png"

function Home() {
    return (
        <div className="home-container">
            <h1>Hệ Thống Quản Lý Văn Bản</h1>
            <img src={banner} alt="banner"></img>
        </div>
    )
}

export default Home;