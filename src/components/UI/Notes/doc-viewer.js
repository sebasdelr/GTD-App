import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
// import { getCustomStyleMap } from 'draftjs-utils';

class DocumentViewer extends Component {
    setEditorReference = ref => {
        this.editorReference = ref;
    };



    render() {
        // const styleMap = getCustomStyleMap();

        return (
            <div className="document-viewer">
                <Editor
                    editorState={this.props.editorState}
                    readOnly
                    toolbarHidden
                    editorRef={this.setEditorReference}
                    // customStyleMap={styleMap}
                />
            </div>
        );
    }
}

export default DocumentViewer;
