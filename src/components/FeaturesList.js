import React from "react";
import { connect } from 'react-redux';
import FeatureView from "./Feature/FeatureView";
import { Row, Col } from 'react-flexbox-grid';

const FeaturesList = ({ features }) => {
  return (
    <Row>
      <Col xs={10}>
        {features.map((feature) => <FeatureView key={feature.id} {...feature} />)}
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
	features: state.features
});

export default connect(mapStateToProps)(FeaturesList);