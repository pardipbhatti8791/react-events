import React, { Component } from "react";
import EventListItem from "./eventListItem";
class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;
    return (
      <div>
        
        {events && events.map(event => {
          return <EventListItem key={event.id} event={event} deleteEvent={deleteEvent} />;
        })}
      </div>
    );
  }
}

export default EventList;
