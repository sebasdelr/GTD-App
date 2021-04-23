import React, { useState } from 'react';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './NoteContent.css';


const NoteContent = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }
  return (
    <div>
      
      <div className="right-pane">
        <header className="App-header">
          Demo
        </header>
        <Editor 
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class" 
        />
        <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
      </div>
      
    </div>
  )
}
export default NoteContent;