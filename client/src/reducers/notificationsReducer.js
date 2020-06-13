export default function(state = {}, action) {
    switch (action.type) {
      case "GET_NOTIFICATIONS":
        return { ...state, list: action.payload };
      case "ADD_NOTIFICATION":
        return { ...state, newnotification: action.payload };
      case "CLEAR_NOTIFICATION":
        return { ...state, newnotification: action.payload };
      case "GET_NOTIFICATION":
        return { ...state, notification: action.payload };
      case "UPDATE_NOTIFICATION":
        return {
          ...state,
          updatenotification: action.payload.success,
          notification: action.payload.doc
        };
      case "DELETE_NOTIFICATION":
        return {
          ...state,
          notificationDeleted: action.payload
        };
      case "CLEAR_DELETEDNBOOK":
        return {
          ...state,
          updatenotification: action.payload.updatenotification,
          notification: action.payload.notification,
          notificationDeleted: action.payload.notificationDeleted
        };
      default:
        return state;
    }
  }
  