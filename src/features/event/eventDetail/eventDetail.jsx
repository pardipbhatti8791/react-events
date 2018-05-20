import React from "react";
import { connect } from 'react-redux';
import { Grid } from "semantic-ui-react";
import EventDetailHeader from "./eventDetailHeader";
import EventDetailinfo from "./eventDetailinfo";
import EventDetailChat from "./EventDetailChat";
import EventDetailSidebar from "./eventDetailSidebar";



const EventDetails = ({event}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailHeader event={event} />
        <EventDetailinfo event={event} />
        <EventDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};
  if (eventId && state.events.eventData.length > 0) {
    event = state.events.eventData.filter(event => event.id === eventId)[0]
  }

  return {
    event
  }
}

export default connect(mapState)(EventDetails);
