import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 8px;
    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        .pic-container {
            width: 60%;
            height: 0;
            padding-bottom: 60%;
            border-radius: 4px;
            box-shadow: ${({ theme }) => theme.shadows.basketIcons};
            img {
                width: 100%;
            }
        }
    }
    .product-type {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    li {
        font-size: 16px;
        max-height: 30px;
        &.hidden {
            overflow: hidden;
            max-height: 0px;
        }
    }
    .expand {
        font-size: 14px;
        font-weight: 600;
        margin-top: 20px;
        color: ${({ theme }) => theme.colors.primary.dark};
    }
`

export { Container }
