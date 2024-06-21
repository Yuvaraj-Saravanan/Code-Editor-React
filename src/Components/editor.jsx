import React, { useState } from "react";
//for theme and style
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
//for code highlighting
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
//for code editor
import { Controlled as ControlEditor } from "react-codemirror2";
import { on } from "codemirror";

export default function Editor(props){

    const {value,langTitle,language,onChange,id}= props
    const [expand,setExpand] = useState(true)

    function handleChange(editor,data,value){
        onChange(value)
    }
    function handleClick(){
        setExpand(prevState => !prevState)
    }

    return (
        <div className={`editor ${expand ? '' : 'shrink'}`} id={id}>
            <div className="editor-header">
                <p>{langTitle}</p>
                <button onClick={handleClick} className="oc-btn">{expand ? "◀" : "▶"}</button>
            </div>
            <ControlEditor 
            className="code-editor"
            onBeforeChange={handleChange}
            value={value}
            options={{
                theme:'material',
                lineNumbers:true,
                lineWrapping:true,
                lint:on,
                mode:language,
                indentUnit:2,
                matchBrackets:on,
                autoCloseBracters:on,
                smartIndent:on,
                tabSize:2
            }}
            />
        </div>
    )
}