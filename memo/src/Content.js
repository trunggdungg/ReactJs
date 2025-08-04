import { memo } from "react";
function Content() {

    console.log("Content component rendered");
    
    return (
        <div>
            <h1>Memo App</h1>
        </div>
    )
}

export default memo(Content);