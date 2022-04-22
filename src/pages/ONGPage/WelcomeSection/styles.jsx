import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    padding-top: 120px;
    padding-bottom: 120px;
    .left {
        display: flex;
        flex-direction: column;
        gap: 50px;
        width: 45%;
    }
    @media (max-width: 920px) {
        flex-direction: column;
        .left {
            width: 100%;
            margin-bottom: 50px;
        }
        .right {
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
`

export { Container }
