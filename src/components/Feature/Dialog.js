import React, {Component} from "react"
import { connect } from "react-redux"

import {Button, InputGroup, FormGroup, Card, Elevation, Switch, Classes, Dialog } from "@blueprintjs/core"
import FeatureEditor from "./FeatureEditor"
import { Row, Col } from 'react-flexbox-grid'

import actions from "../../redux/modules/actions"

const featureCardStyle = {  
  width: "100%",
  minWidth: "350px",
  minHeight: "300px",
  flex: "1",
  margin: "5px",
}

class FeatureDialog extends Component {

    constructor (props) {
        super(props)
        this.state = {
            summary: '',
            description: '',
            isPublic: false,        
        }                
    }
        
    onSummaryChange = (e) => {        
        this.setState({ summary: e.target.value })
    }

    onDescriptionChange = (content) => {
        this.setState({ description: content });        
    }

    onPublicChange = (e, checked) => {
        this.setState({ [e.target.name]: checked });
    };

    onSubmitClick = e => {
        this.props.submit(this.state)
        this.props.handleClose()      
    }  

    render() {
        const {isOpen, summary, isPublic, description} = this.props
        
        return (
            <Dialog icon="info-sign" style={{minWidth: "700px"}} title="New Feature Suggestion" isOpen={isOpen}>

            <div className={Classes.DIALOG_BODY}>      
                <Card style={featureCardStyle} interactive={true} elevation={Elevation.TWO}>
                    <Row>
                        <Col xs={10}>
                            <FormGroup
                                label="Summary"
                                labelFor="feature-summary"
                                labelInfo="(required)">
                                <InputGroup className="bp3-intent-primary" id="feature-summary" name="summary" value={summary} onChange={this.onSummaryChange}/>            
                            </FormGroup>
                        </Col>
                        <Col xs={2}>
                            <FormGroup label="Public?" labelFor="feature-visibility">
                                <Switch type="checkbox" id="feature-visibility" name="isPublic" checked={isPublic} onChange={this.onPublicChange} />
                            </FormGroup>                      
                        </Col>
                    </Row>
                    <Row>
                        <Col xs>
                            <FeatureEditor content={description} onChange={this.onDescriptionChange.bind(this)}/>
                        </Col>
                    </Row>                        
                </Card>    
            
            </div>
            <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <Button onClick={this.props.handleClose}>Close</Button>
                    <Button onClick={this.onSubmitClick} intent="primary" icon="document">Create</Button>
                </div>
            </div>
        </Dialog>   
        )
    }

}
 
const mapDispatchToProps = (dispatch) => ({
    submit: (featureData) => dispatch(actions.addFeature(featureData))
  });
  
export default connect(null, mapDispatchToProps)(FeatureDialog);