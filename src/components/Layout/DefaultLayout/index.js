import Sidebar from "~/components/Sidebar";
import "./DefaultLayout.scss"

function DefaultLayout( {children} ) {
    return ( 
        <div>
            <div className="layout-container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout;