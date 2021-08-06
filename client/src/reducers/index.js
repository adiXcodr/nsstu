import { combineReducers } from "redux";
import events from "./eventsReducer";
import user from "./userReducer";
import members from "./membersReducer";
import gallerys from "./gallerysReducer";
import notifications from "./notificationsReducer";

const rootReducer = combineReducers({
  events,
  user,
  members,
  gallerys,
  notifications
});

export default rootReducer;
