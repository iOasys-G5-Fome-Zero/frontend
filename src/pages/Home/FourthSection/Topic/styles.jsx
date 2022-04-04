import styled from "styled-components"

const Container = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;
    .number{
        font-size: 39px;
        min-height: 85px;
        min-width: 85px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: white;
        background-color: #00843F;
        border-radius: 9999px;
    }
    .content{
        font-size: 20px;
    }
`

export { Container }
