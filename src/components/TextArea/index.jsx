import { useState, useEffect } from 'react'
import * as S from './styles'

const TextArea = ({ label, bindFunction }) => {
    const [data, setData] = useState('')
    const [focus, setFocus] = useState(false)

    useEffect(() => bindFunction(data), [data, bindFunction])

    const labelUp = data || focus

    return (
        <S.Container labelUp={labelUp}>
            <textarea
                name={label}
                id={label}
                onChange={(e) => setData(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            ></textarea>
            <label htmlFor={label}>{label}</label>
        </S.Container>
    )
}

export default TextArea
