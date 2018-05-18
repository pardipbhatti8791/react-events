import React, { Component } from "react";
import EventListItem from "./eventListItem";
class EventList extends Component {
  render() {
    return (
      <div>
        <h1>Event List</h1>
        {this.props.events.map(event => {
          return <EventListItem key={event.id} event={event} />;
        })}
      </div>
    );
  }
}

export default EventList;
