import React from "react";

export default function OutputSection(props){
    return(
        <div className="output-section">
         <iframe 
            srcDoc={props.inputFromEditor}
            frameBorder="0"
            sandbox="allow-scripts"
            width='100%' height="100%"
            />
        </div>
    )
}