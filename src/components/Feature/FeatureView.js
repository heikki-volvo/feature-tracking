import React, {Component} from "react"
import { connect } from 'react-redux'

import { Button, Card, Elevation, Menu, MenuDivider, MenuItem, Popover, Position, InputGroup, Classes, Drawer } from "@blueprintjs/core"
import { Row, Col } from 'react-flexbox-grid';

import actions from "../../redux/modules/actions"
import FeatureActions from "./FeatureActions"
import FeatureEditor from "./FeatureEditor"

const fieldContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  paddingLeft: "5px",
  paddingRight: "5px"
}

const summaryContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",  
}

class FeatureView extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isEditing: false,
      isCommentsBarOpen: false,
      summary: this.props.summary,
      description: this.props.description,
      votes: this.props.votes
    }
    
    this.isEditing = this.toggleEdit.bind(this)    
  }

  addComment = () => {
    this.setState(prevState => ({
      isCommentsBarOpen: !prevState.isCommentsBarOpen
    }));    
  }
  
  onChange = e => this.setState({ [e.target.name]: e.target.value })
  
  onDescriptionChange = (content) => {
    this.setState({ descrption: content });        
  }

  toggleEdit = () => {  
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));

    if (this.state.isEditing){
      this.props.editFeature({
        summary: this.props.summary,
        description: this.props.description,
        votes: this.props.votes
      })
    }
  };

  renderCommandButton = () => {
    const exampleMenu = (
      <Menu>
          <MenuItem onClick={this.toggleEdit} icon="edit" text="Change Content" />
          <MenuItem onClick={this.addComment} icon="comment" text="Add Comment"/>
          <MenuDivider />
          <MenuItem onClick={this.props.deleteFeature} intent="danger" icon="delete" text="Delete"/>          
      </Menu>
    );

    if (this.state.isEditing) 
      return (<Button intent="primary" icon="confirm" text="Save" onClick={this.toggleEdit}/>)
      else
    return (<Popover content={exampleMenu} position={Position.RIGHT_BOTTOM}>
        <Button icon="share" text="Edit..." />
        </Popover>)
            
  }

  render() {  
    //https://itnext.io/reddits-voting-ui-in-vanilla-vs-react-vs-vue-vs-hyperapp-shedding-light-on-the-purpose-of-spa-ee6b6ac9a8cc
    const { summary, description, isEditing, isCommentsBarOpen} = this.state
    const { votes, id } = this.props

    return (
      <Card elevation={Elevation.TWO} style={{marginTop: "10px", marginBottom: "10px"}} >
          <Row> 
          <Col xs={1}>
            <FeatureActions              
              onUpVote={() => this.props.votePlus(id)}
              onDownVote={() => this.props.voteMinus(id)}
              votes = {votes}/>                               
          </Col>
          <Col xs={11}>
            <div style={fieldContainerStyle}>
              <div style={summaryContainerStyle}>
                <div style={{flex: 2, paddingRight: "5px"}}>
                  <InputGroup
                    disabled={!isEditing}   
                    name="summary"                  
                    onChange={this.onChange}
                    value={summary}/>
                </div>
                <div>{this.renderCommandButton()}</div>
              </div>              
              <div>
                <FeatureEditor readOnly={!isEditing} 
                  content={description} 
                  onChange={this.onDescriptionChange.bind(this)}/>
              </div>
            </div>         
          </Col>          
        </Row>
        <Drawer
          icon="info-sign"
          onClose={this.addComment}
          title="Comments"
          isOpen={isCommentsBarOpen}
          >
            <div className={Classes.DRAWER_BODY}>
                <div className={Classes.DIALOG_BODY}>
                    Comments...  
                </div>
            </div>
        </Drawer>                   
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    votePlus: (id) => dispatch(actions.thumbUpFeature(id)),
    voteMinus: (id) => dispatch(actions.thumbDownFeature(id)),
    editFeature: (id) => dispatch(actions.editFeature(id)),
    deleteFeature: (id) => dispatch(actions.removeFeature(id))
});
  
export default connect(null, mapDispatchToProps)(FeatureView);