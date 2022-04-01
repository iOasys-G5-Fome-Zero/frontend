import * as S from "./styles"
import NavBar from "../NavBar"
import Footer from "../Footer"

const Layout = ({ children }) => {
    return (
        <S.PageLayout>
            <NavBar />
            <div className="content">{children}</div>
            <Footer/>
        </S.PageLayout>
    )
}

export default Layout