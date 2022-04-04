import styled from "styled-components";

const Container = styled.section`
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
    gap: 70px;
    min-height: 510px;
    padding: 80px;
    background: url(${({bkgSrc}) => bkgSrc});
    background-size: cover; 
    
    .basket-content {
        display: flex;
        width: 60%;

        flex-direction: column;
        h1 {
            height: 100px;
            font-size: 40px;
            text-justify: center;
        }
        .description{
            font-size: 22px;
            line-height: 150%;
        }
        .products-container{
            display: grid;
            margin-top: 40px;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }
    }
`

export { Container }