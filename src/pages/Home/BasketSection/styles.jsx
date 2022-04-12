import styled from "styled-components";
import ImgSrc from "../../../assets/BasketSectionImg.png"

const Container = styled.section`
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
    gap: 70px;
    min-height: 510px;
    padding: 80px;
    background: url(${ImgSrc});
    background-position: 60% 50%;
    background-size: cover; 
    
    .basket-content {
        display: flex;
        width: 60%;
        flex-direction: column;
        .products-container{
            display: grid;
            margin-top: 40px;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }
    }
    
    @media(max-width: 850px){
        flex-direction: column;
        padding: 30px;
        align-items: center;
        .basket-content{
            width: 85%;
            h2{
                margin-bottom: 28px;
            }
            .products-container{
                display: flex;
                flex-direction: column;
            }
        }
    }
`

export { Container }