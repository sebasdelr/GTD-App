import React, { Component } from 'react';
import { EditorState, convertFromRaw, convertToRaw, ContentState } from 'draft-js';
import Editor from './doc-editor';
import DocumentViewer from './doc-viewer';
import raw from './raw.json';

import htmlToDraft from 'html-to-draftjs';

const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';


// import './doc.css';

class DocumentContainer extends Component {
    contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
/*         editorState: EditorState.createWithContent(
            ContentState.createFromBlockArray(
              convertFromHTML(props.content)
            )
          ), */
      };
    }

    state = {
        editorState: EditorState.createWithContent(convertFromRaw(raw)),
        //         editorState: EditorState.createEmpty(),
        // viewerState: EditorState.createEmpty()
        viewerState: EditorState.createWithContent(convertFromRaw(raw))
    };

    onChange = editorState => {
        this.setState({ editorState });
    };

    onClick = () => {
        this.setState(state => ({
            ...state,
            viewerState: state.editorState
        }));
    };

    logState = () => {
        console.log(
            JSON.stringify(
                convertToRaw(this.state.viewerState.getCurrentContent())
            )
        );
    };

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                />
                <p>
                    <button onClick={this.onClick}>Show In Viewer</button>
                    <button onClick={this.logState}>Log State</button>
                </p>
                <DocumentViewer editorState={this.state.viewerState} />
            </div>
        );
    }
}

export default DocumentContainer;