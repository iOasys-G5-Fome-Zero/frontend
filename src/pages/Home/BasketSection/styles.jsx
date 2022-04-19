import styled from "styled-components";
import ImgSrc from "../../../assets/BasketSectionBkg.png"

const Container = styled.section`
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
    gap: 70px;
    min-height: 510px;
    padding: 80px;
    background: url(${ImgSrc});
    background-position: center;
    background-size: cover; 
    
    .basket-content {
        display: flex;
        width: 60%;
        flex-direction: column;
        gap: 32px;
        .products-container{
            display: grid;
            margin-top: 40px;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }
    }
    
    @media(max-width: 920px){
        flex-direction: column;
        padding: 30px 0px;
        align-items: center;
        .basket-content{
            width: 85%;
            .products-container{
                display: flex;
                flex-direction: column;
            }
        }
    }
`

export { Container }