import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;
    gap: 20px;
    padding: ${({ ong }) => ong ? "50px 32px" : ""};
    border: ${({ ong, theme }) => ong ? `1px solid ${theme.colors.primary.dark}` : ""};
    border-radius: 4px;
    .info {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
        gap: 60px;
        p{
            font-size: 24px;
            line-height: 150%;
        }
    }
    form {
        padding: 0px 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    @media(max-width: 900px){
        flex-direction: column;
        padding: 20px 8px;
        .info{
            align-items: center;
            width: 90vw;
            padding: 0px;
        }
    }
`

export { Container }