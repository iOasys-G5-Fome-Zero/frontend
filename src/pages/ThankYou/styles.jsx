import styled from "styled-components"

const Message = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 4px;
    padding: 60px 140px;
    width: 724px;
    max-width: 95vw;
    @media (max-width: 700px){
        padding: 40px;
        h3{
            font-size: 38px;
        }
        h6{
            font-size: 21px;
        }
    }
    h3{
        text-align: center;
        color: ${({ theme }) => theme.colors.primary.dark};
    }
`



export { Message }