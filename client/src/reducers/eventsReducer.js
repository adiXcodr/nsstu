export default function(state = {}, action) {
  switch (action.type) {
    case "GET_EVENTS":
      return { ...state, list: action.payload };
    case "ADD_EVENT":
      return { ...state, newevent: action.payload };
    case "CLEAR_EVENT":
      return { ...state, newevent: action.payload };
    case "GET_EVENT":
      return { ...state, event: action.payload };
    case "UPDATE_EVENT":
      return {
        ...state,
        updateEvent: action.payload.success,
        event: action.payload.doc
      };
    case "DELETE_EVENT":
      return {
        ...state,
        postDeleted: action.payload
      };
    case "CLEAR_DELETEDBOOK":
      return {
        ...state,
        updateEvent: action.payload.updateEvent,
        event: action.payload.event,
        postDeleted: action.payload.postDeleted
      };
    default:
      return state;
  }
}
