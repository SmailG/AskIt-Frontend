import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapView from '../presentation-components/Map'
import { getMarkers, toggleMarkers } from '../actions/index';
import './MapContainer.css';
import { Button, Icon, Menu, Segment, Sidebar, Checkbox } from 'semantic-ui-react'

const mapStateToProps = (state) => {
	return {
		markers: state.markers.markersData,
		request: state.markers.request,
		showMarkers: state.markers.showMarkers
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getMarkers: () => dispatch(getMarkers()),
		toggleMarkers: () => dispatch(toggleMarkers())
	}
}

class DashboardContainer extends Component {

}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);