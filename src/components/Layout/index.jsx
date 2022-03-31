import * as S from "./styles"
import NavBar from "../NavBar"

const Layout = ({ children }) => {
    return (
        <S.PageLayout>
            <NavBar/>
            {children}
        </S.PageLayout>
    )
}

export default Layout