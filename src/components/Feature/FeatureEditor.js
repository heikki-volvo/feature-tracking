import React, { Component } from 'react';

import { Editor } from 'react-draft-wysiwyg';

class FeatureEditor extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            contentState : this.props.content,
        }
    }

    render() {
        const { contentState } = this.state;
        
        return (
            <Editor
            initialContentState={contentState}
            toolbarHidden={this.props.readOnly}
            readOnly={this.props.readOnly}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onContentStateChange={this.props.onChange}
            toolbar={{
                options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'colorPicker', 'link', 'emoji', 'image'],
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                }}
            />
        );
    }
}

export default FeatureEditor

