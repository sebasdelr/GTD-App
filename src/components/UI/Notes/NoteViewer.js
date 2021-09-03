import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class NoteViewer extends Component {
    editorReference = ref => {
        this.editorReference = ref;
    };

    render() {


        return (
            <Editor
                editorState={this.props.editorState}
                readOnly
                toolbarHidden
                editorRef={this.editorReference}
                // customStyleMap={styleMap}
            />
        );
    }
}

export default NoteViewer;