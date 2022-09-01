import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
    const [changedText, setChangedText] = useState();

    return (
        <div>
            <h2>Hello, world!</h2>
            {changedText ? <Output>Changed!</Output> : <Output>It's good to see you!</Output>}
            <button onClick={() => { setChangedText(true) }}>Change text!</button>
        </div>
    );
}; 

export default Greeting;