import React, { Component } from 'react';
import { EditorState, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import NoteViewer from './NoteViewer';
// import NoteEditor from './NoteEditor';
import htmlToDraft from 'html-to-draftjs';
import NoteForm from './NoteForm';


class NoteContent extends Component {
  constructor(props) {
    super(props);
    //insert html below
    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      // const editorState = EditorState.createWithContent(contentState);
      const viewerState = EditorState.createWithContent(contentState);
      this.state = {
        // editorState,
        viewerState,
      };
    }
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  passNoteHandler: Function = (enteredText) => {
    this.props.onAddNote(enteredText);
  }

  deleteNoteHandler: Function = (id) => {
    this.props.onDeleteItem(id);
  }


  render() {
    // const { editorState } = this.state;
    return (
      <div>
        {/* <NoteEditor
          editorState={this.state.editorState}
          onEditorStateChange={this.onEditorStateChange}
        />
        <NoteViewer
          editorState={this.state.viewerState}
        /> */}
        <NoteForm />
      </div>
    );
  }
}

export default NoteContent;