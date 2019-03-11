import React from "react"

import { Icon, Intent } from "@blueprintjs/core"
import { Row, Col } from 'react-flexbox-grid';

const pollVotes = {
  fontSize: "3em",
  fontWeight: "300",
  color: "#000000",
  marginTop: "-8px"
}

const FeatureActions = ({onUpVote, onDownVote, votes}) => {

    return (  
      <Col center="xs">
        <Row center="xs">  
          <Icon icon="circle-arrow-up" iconSize={40} intent={Intent.PRIMARY} onClick={onUpVote} />            
        </Row>
        <Row center="xs" style={pollVotes}>  
          {votes}
        </Row>
        <Row center="xs">  
           <Icon icon="circle-arrow-down" iconSize={40} intent={Intent.PRIMARY} onClick={onDownVote} />
        </Row>
      </Col>            
    );
  };

export default FeatureActions;
