import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class NoteEditor extends Component {
    onChange = editorState => {
        this.setState({ editorState });
        this.props.onEditorStateChange(editorState);
    };

    render() {


        return (
            <Editor
                editorState={this.props.editorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange={this.onChange}
                // customStyleMap={styleMap}
            />
        );
    }
}

export default NoteEditor;