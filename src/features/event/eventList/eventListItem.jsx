import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./eventListAttenddee";

class EventListItem extends Component {
  render() {
    const { event } = this.props;

    return (
      <Segment.Group>
        <Segment loading={false}>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={`${event.hostPhotoURL}`} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary loading={false}>
          <List horizontal>
            {event.attendees.map((att, index) => {
              return <EventListAttendee key={index} attendee={att} />;
            })}
          </List>
        </Segment>
        <Segment clearing>
          <Button as="a" color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
