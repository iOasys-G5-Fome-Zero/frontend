import { useEffect, useState } from "react"
import * as S from "./styles"

const Input = ({ type, label, bindFunction }) => {

    const [data, setData] = useState("")
    const [focus, setFocus] = useState(false)

    useEffect(() => bindFunction(data), [data, bindFunction])

    const labelUp = data || focus

    return (
        <S.Container labelUp={labelUp}>
            <input
                type={type}
                name={label}
                value={data}
                onChange={e => setData(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
            <label htmlFor={label}>{label}</label>
        </S.Container>
    )
}

export default Input