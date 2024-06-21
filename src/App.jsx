import React from 'react'
import EditorSection from './Components/editorSection'
import OutputSection from './Components/outputSection'

function App() {

  const [inputFromEditor,setInputFromEditor] = React.useState('')

  function getInput(data){
    setInputFromEditor(data)
  }

  return (
    <>
      <EditorSection 
          Input={getInput}
      />
      <OutputSection
        inputFromEditor={inputFromEditor}
      />
    </>
  )
}

export default App
