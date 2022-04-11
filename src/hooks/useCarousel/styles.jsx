import styled from "styled-components"

const Indicator = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ selected }) => (selected ? "lime" : "#00843F")};
    transform: ${({ selected }) => (selected ? "scale(150%)" : "scale(100%)")};
`

export default Indicator
