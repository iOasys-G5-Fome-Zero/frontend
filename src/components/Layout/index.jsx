import * as S from "./styles"
import NavBar from "../NavBar"

const Layout = ({ children }) => {
    return (
        <S.PageLayout>
            <NavBar />
            <div className="content">{children}</div>
        </S.PageLayout>
    )
}

export default Layout