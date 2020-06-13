import axios from "axios";
export function getEvents() {
  const request = axios.get("/events").then(response => response.data);

  return {
    type: "GET_EVENTS",
    payload: request
  };
}

export function addEvent(event) {
  const request = axios.post("/events", event).then(response => response.data);

  return {
    type: "ADD_EVENT",
    payload: request
  };
}

export function clearNewEvent() {
  return {
    type: "CLEAR_EVENT",
    payload: {}
  };
}

export function getEvent(id) {
  const request = axios
    .get(`/getEvent?id=${id}`)
    .then(response => response.data);

  return {
    type: "GET_EVENT",
    payload: request
  };
}

export function updateEvent(data) {
  const request = axios
    .post(`/event_update`, data)
    .then(response => response.data);
  return {
    type: "UPDATE_EVENT",
    payload: request
  };
}

export function deleteEvent(id) {
  const request = axios
    .delete(`/event_delete?id=${id}`)
    .then(response => response.data);

  return {
    type: "DELETE_EVENT",
    payload: request
  };
}

export function clearEvent() {
  return {
    type: "CLEAR_DELETEDBOOK",
    payload: {
      event: null,
      updateEvent: false,
      postDeleted: false
    }
  };
}

//MEMBERS-

export function getMembers() {
  const request = axios.get("/working-team").then(response => response.data);

  return {
    type: "GET_MEMBERS",
    payload: request
  };
}

export function addMember(member) {
  const request = axios
    .post("/working-team", member)
    .then(response => response.data);

  return {
    type: "ADD_MEMBER",
    payload: request
  };
}

export function clearNewMember() {
  return {
    type: "CLEAR_MEMBER",
    payload: {}
  };
}

export function getMember(id) {
  const request = axios
    .get(`/getMember?id=${id}`)
    .then(response => response.data);

  return {
    type: "GET_MEMBER",
    payload: request
  };
}

export function updateMember(data) {
  const request = axios
    .post(`/member_update`, data)
    .then(response => response.data);
  return {
    type: "UPDATE_MEMBER",
    payload: request
  };
}

export function deleteMember(id) {
  const request = axios
    .delete(`/member_delete?id=${id}`)
    .then(response => response.data);

  return {
    type: "DELETE_MEMBER",
    payload: request
  };
}

export function clearMember() {
  return {
    type: "CLEAR_DELETEDMBOOK",
    payload: {
      member: null,
      updateMember: false,
      memberDeleted: false
    }
  };
}

//NOTIFICATIONS-

export function getNotifications() {
  const request = axios.get("/getNotifications").then(response => response.data);

  return {
    type: "GET_NOTIFICATIONS",
    payload: request
  };
}

export function addNotification(notification) {
  const request = axios
    .post("/", notification)
    .then(response => response.data);
    

  return {
    type: "ADD_NOTIFICATION",
    payload: request
  };
}

export function clearNewNotification() {
  return {
    type: "CLEAR_NOTIFICATION",
    payload: {}
  };
}

export function getNotification(id) {
  const request = axios
    .get(`/getNotification?id=${id}`)
    .then(response => response.data);

  return {
    type: "GET_NOTIFICATION",
    payload: request
  };
}

export function updateNotification(data) {
  const request = axios
    .post(`/notification_update`, data)
    .then(response => response.data);
  return {
    type: "UPDATE_NOTIFICATION",
    payload: request
  };
}

export function deleteNotification(id) {
  const request = axios
    .delete(`/notification_delete?id=${id}`)
    .then(response => response.data);

  return {
    type: "DELETE_NOTIFICATION",
    payload: request
  };
}

export function clearNotification() {
  return {
    type: "CLEAR_DELETEDNBOOK",
    payload: {
      notification: null,
      updateNotification: false,
      notificationDeleted: false
    }
  };
}


//GALLERY--

export function getGallerys() {
  const request = axios.get("/gallerys").then(response => response.data);

  return {
    type: "GET_GALLERYS",
    payload: request
  };
}

export function addGallery(gallery) {
  const request = axios
    .post("/gallerys", gallery)
    .then(response => response.data);

  return {
    type: "ADD_GALLERY",
    payload: request
  };
}

export function clearNewGallery() {
  return {
    type: "CLEAR_GALLERY",
    payload: {}
  };
}

export function getGallery(id) {
  const request = axios
    .get(`/getGallery?id=${id}`)
    .then(response => response.data);

  return {
    type: "GET_GALLERY",
    payload: request
  };
}

export function updateGallery(data) {
  const request = axios
    .post(`/gallery_update`, data)
    .then(response => response.data);
  return {
    type: "UPDATE_GALLERY",
    payload: request
  };
}

export function deleteGallery(id) {
  const request = axios
    .delete(`/gallery_delete?id=${id}`)
    .then(response => response.data);

  return {
    type: "DELETE_GALLERY",
    payload: request
  };
}

export function clearGallery() {
  return {
    type: "CLEAR_DELETEDGBOOK",
    payload: {
      gallery: null,
      updateGallery: false,
      galleryDeleted: false
    }
  };
}

// ======== USER ========++++

export function loginUser({ email, password }) {
  const request = axios
    .post("/login", { email, password })
    .then(response => response.data);
  return {
    type: "USER_LOGIN",
    payload: request
  };
}

export function auth() {
  const request = axios.get("/auth").then(response => response.data);

  return {
    type: "USER_AUTH",
    payload: request
  };
}

export async function getUsers() {
  const request = await axios.get("/users").then(response => response.data);
  return {
    type: "GET_USER",
    payload: request
  };
}

export function userRegister(user, userList) {
  const request = axios.post("/add-admin", user);

  return dispatch => {
    request.then(({ data }) => {
      let users = data.success ? [...userList, data.user] : userList;
      let response = {
        success: data.success,
        users,
        message: data.message ? data.message : null
      };

      dispatch({
        type: "USER_REGISTER",
        payload: response
      });
    });
  };
}

export function deleteUser(id) {
  const request = axios
    .delete(`/user_delete?id=${id}`)
    .then(response => response.data);

  return {
    type: "DELETE_USER",
    payload: request
  };
}
