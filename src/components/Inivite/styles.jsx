import styled from 'styled-components'

const Invite = styled.div`
    width: 550px;
    max-width: 80vw;
    text-align: center;
    padding: 48px 60px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.primary.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin: 80px 0px;
    .sign-up-link {
        padding: 16px 62px;
        background-color: ${({ theme }) => theme.colors.primary.dark};
        color: white;
        border-radius: 4px;
    }
    @media (max-width: 700px) {
        h3 {
            font-size: 21px;
        }
        .sign-up-link {
            padding: 16px 40px;
        }
    }
`

export { Invite }
