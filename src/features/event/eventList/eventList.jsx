import React, { Component } from "react";
import EventListItem from "./eventListItem";
class EventList extends Component {
  render() {
    const { events, onEventEdit, deleteEvent } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {events.map(event => {
          return <EventListItem key={event.id} event={event} onEventEdit={onEventEdit} deleteEvent={deleteEvent} />;
        })}
      </div>
    );
  }
}

export default EventList;
