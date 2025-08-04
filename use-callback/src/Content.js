import { memo } from "react";
function Content({ onIncre }) {

    console.log("Content component rendered");

    return (
        <div>
            <h1>Memo App</h1>
            <button onClick={onIncre}>Increment</button>
        </div>
    )
}

export default memo(Content);