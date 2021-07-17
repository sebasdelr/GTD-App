import React, { Component } from 'react'
import { EditorState, ContentState, convertFromHTML } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'

class MyEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(props.content)
        )
      ),
    }
  }

  render() {
    return <Editor editorState={this.state.editorState} />
  }
}

export default MyEditor