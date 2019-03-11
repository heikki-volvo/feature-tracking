import React, { Component } from 'react';
import {Alignment, Button, Navbar,} from "@blueprintjs/core";
import './styles/index.scss';

import FeaturesList from "./components/FeaturesList";
import FeatureDialog from "./components/Feature/Dialog"
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isOpen: false      
    }    
  }

  toggleOpenModal = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const isOpen = this.state.isOpen

    return (
      <Grid fluid>
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Support and Onboarding Features Tracking</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="issue-new" text="Recent" />
                <Button className="bp3-minimal" icon="arrow-up" text="Popular" />
                <Button className="bp3-minimal" icon="new-object" text="New Feature" onClick={this.toggleOpenModal}/>
            </Navbar.Group>
        </Navbar>
        <FeatureDialog isOpen={isOpen} handleClose={() => this.toggleOpenModal()}/>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={10}>
                <FeaturesList/>
              </Col>
            </Row>
          </Col>
        </Row>             
      </Grid>
    );
  }
}

export default App;
