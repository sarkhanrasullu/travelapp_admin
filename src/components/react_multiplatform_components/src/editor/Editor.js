// Note that Froala Editor has to be required separately
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditor from 'react-froala-wysiwyg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import React, {Component} from 'react';
import {StateUtil} from '../utils/StateUtil';

export class Editor extends Component {

    state = {
        val: null
    }

  constructor() {
    super();

    this.handleModelChange = this.handleModelChange.bind(this);
  }

  componentDidMount = ()=>{
    const {component, item} = this.props;
    const html = StateUtil.get(component.state, item.name);
    this.setState({val: html});
  }

  handleModelChange (model) {
    const {item} = this.props;
    StateUtil.handleFieldChange(this, model, item.name);
  }

  render () {
      if(this.state.val===null) return null;
    return(
      <div className="sample">
        <FroalaEditor
          model={this.state.val}
          config={{
            placeholder: "Edit Me",
            events:{
                'image.beforeUpload': function (files) {
                    console.log('before upload='+files.length)
                    if (files.length) {
                        // Create a File Reader.
                        var reader = new FileReader();
        
                        // Set the reader to insert images when they are loaded.
                        const this_ = this;
                        reader.onload = function (e) {
                            var result = e.target.result;
                            console.log()
                            this_.image.insert(result, null, null, this_.image.get());
                        };
        
                        // Read image as base64.
                        reader.readAsDataURL(files[0]);
                    }
        
                    this.popups.hideAll();
        
                    // Stop default upload chain.
                    return false;
                }
            }
          }}
          onModelChange={this.handleModelChange}
        />
        <FroalaEditorView model={this.state.val} />
      </div>
    );
  }

}