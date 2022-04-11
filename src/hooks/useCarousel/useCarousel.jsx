import { useState, useMemo } from "react"
import Indicator from "./styles"


function createIndicators(num, selected) {
    
    const result = []

    for (let i = 0; i < num; i++) {
        result.push((
            <Indicator selected={i === selected} key={i}/>
        ))
    }

    return result
}


const useCarousel = (numElements) => {
    const [selectedElement, setSelectedElement] = useState(0)

    
    const indicators = useMemo(() => {
        return createIndicators(numElements, selectedElement)
    }, [selectedElement, numElements])

    const handleScroll = (e) => {
        
        let maxScrollLeft = e.target.scrollWidth - e.target.clientWidth
        
        const { scrollLeft } = e.target
        
        let newSelected = Math.trunc((scrollLeft / maxScrollLeft) * numElements)

        if (newSelected === numElements) newSelected--
        
        setSelectedElement(newSelected)
    }


    return {
        indicators, handleScroll
    }
}

export default useCarousel