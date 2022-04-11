import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
    align-items: center;
    text-align: center;
    gap: 32px;
    .topics{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .main-content{
        display: flex;
        align-items: center;
    }
    .img-container{
        img{
            position: relative;
            left: 20%;
            width: 485px;
            max-width: 100%;
        }
    }
    
    @media(max-width: 1000px){
        .main-content{
            flex-direction: column;
            img{
                left: 0;
            }
        }
    }

    @media(max-width: 700px){
        h2{
            font-size: 24px;
        }
        h5{
            font-size: 16px;
            line-height: 120%;
        }
    }
`

export { Container }