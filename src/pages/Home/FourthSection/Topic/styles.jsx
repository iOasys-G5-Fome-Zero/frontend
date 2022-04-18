import styled from "styled-components"

const Container = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;
    text-align: start;
    .number{
        font-size: 39px;
        min-height: 85px;
        min-width: 85px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.grayscale.white};
        background-color: ${({ theme }) => theme.colors.primary.dark};
        border-radius: 9999px;
    }
    @media(max-width: 500px){
        .number{
            min-height: 60px;
            min-width: 60px;
            font-size: 28px;
        }
    }
`

export { Container }
