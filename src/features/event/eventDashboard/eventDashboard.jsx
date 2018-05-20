import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import { connect } from 'react-redux';

import EvenList from "../eventList/eventList";


import * as actions from '../eventActions';


class EventDashboard extends Component {

  handleDeleteEvent = (eventId) => () => {
    this.props.dispatch(actions.deleteEvent(eventId));
  }

  render() {
    const { events } = this.props;
    
    return (
      <Grid>
        <Grid.Column width={10}>
          <EvenList deleteEvent={this.handleDeleteEvent} onEventEdit={this.handleEditEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          
        </Grid.Column>
      </Grid>
    );
  }
}

const mapState = state => ({
  events: state.events.eventData
});

export default connect(mapState)(EventDashboard);
