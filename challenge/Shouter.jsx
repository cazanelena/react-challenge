import {useState} from "react";

function Shouter() {
    const [text, setText] = useState("");

    function update(e) {
        setText(e.target.value.toUpperCase())
    }

    return (
        <>
        <input onChange={update} />
        <output>{text}</output>
        </>
    )
}

export default Shouter
