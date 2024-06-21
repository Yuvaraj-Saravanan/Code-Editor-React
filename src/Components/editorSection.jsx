import React,{useEffect, useState} from "react";
import Editor from "./editor";

export default function EditorSection({Input}){

    const [html,setHtml] = useState('')
    const [css,setCss] = useState('')
    const [js,setJs] = useState('')
    const [srcDoc,setSrcDoc] = useState('')

    setTimeout(() => {
        setSrcDoc(`
            <html>
                <body>${html}<body>
                <style>${css}</style>
                <script>try{
                    ${js}
                }catch(err){alert(err)}</script>
            </html>
            `)
    }, 500);

    useEffect(()=>Input(srcDoc),[srcDoc])

    return (
        <div className="editor-section">
            <Editor
                id='html'
                langTitle="HTML"
                language="xml" 
                onChange={setHtml}
                value={html}
            />
            <Editor
                id='css'
                langTitle="CSS"
                language="css" 
                onChange={setCss}
                value={css}
            />
            <Editor
                id='js'
                langTitle="JavaScript"
                language="javascript" 
                onChange={setJs}
                value={js}
            />
        </div>
    )
}