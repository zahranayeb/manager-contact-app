import { useState } from "react"

const Test = () => {
    const [count, setCount] = useState(0);

    const changeCount = () => {
        setCount(count+1)
    }

    return (
        <p style={{backgroundColor: "red"}} onClick={changeCount}> {count} </p>
    )
}

export default Test