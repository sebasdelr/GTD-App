import React, { Component } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './NoteContent.css';

import htmlToDraft from 'html-to-draftjs';


class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    //insert html below
    const html = props.content;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  componentDidMount() {
    // Runs after the first render() lifecycle
    
    console.log("yes");
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  }
}


const NoteContent = (props) => {

  return (
    <div>
      
      <div className="right-pane">
        <header className="App-header">
          {props.title}
        </header>
        <EditorConvertToHTML content={props.content}/>{props.content}

        
      </div>
      
    </div>
  )
}
export default NoteContent;