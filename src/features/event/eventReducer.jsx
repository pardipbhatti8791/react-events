import { createReducer } from "../../app/common/utils/reducerUtil";
import * as actionTypes from "./eventConstants";

const initalState = {
  eventData: [
    {
      id: "1",
      title: "Trip to Tower of London",
      date: "2018-03-27",
      category: "culture",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
      city: "London, UK",
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: "Bob",
      hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      attendees: [
        {
          id: "a",
          name: "Bob",
          photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
        },
        {
          id: "b",
          name: "Tom",
          photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
        }
      ]
    },
    {
      id: "2",
      title: "Trip to Punch and Judy Pub",
      date: "2018-03-28",
      category: "drinks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
      city: "London, UK",
      venue: "Punch & Judy, Henrietta Street, London, UK",
      hostedBy: "Tom",
      hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      attendees: [
        {
          id: "b",
          name: "Tom",
          photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
          id: "a",
          name: "Bob",
          photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
        }
      ]
    }
  ]
};

/**
 * @param {*} state
 * @param {*} payload
 */
export const createEvent = (state, payload) => {
  return {
    ...state,
    eventData: [...state.eventData, payload.event]
  };
};

/**
 * @param {*} state
 * @param {*} payload
 */
export const updateEvent = (state, payload) => {
  return {
    ...state,
    eventData: state.eventData.filter(event => {
        if (event.id === payload.event.id) {
            return Object.assign({}, payload.event)
        } else {
            return event;
        }
    })
  }
};

/**

 * @param {*} state 
 * @param {*} payload 
 */
export const deleteEvent = (state, payload) => {
  return {
    ...state,
    eventData: state.eventData.filter(event => event.id !== payload.eventId)
  };
};

export default createReducer(initalState, {
  [actionTypes.CREATE_EVENT]: createEvent,
  [actionTypes.UPDATE_EVENT]: updateEvent,
  [actionTypes.DELETE_EVENT]: deleteEvent
});
