import React, { Component } from 'react';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class DocumentEditor extends Component {
    onChange = editorState => {
        this.setState({ editorState });
        this.props.onChange(editorState);
    };

    render() {

        return (
            <Editor
                editorState={this.props.editorState}
                wrapperClassName="document-wrapper"
                editorClassName="document-editor"
                toolbarClassName="document-toolbar"
                onEditorStateChange={this.onChange}
            />
        );
    }
}

export default DocumentEditor;
