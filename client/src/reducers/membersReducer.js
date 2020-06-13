export default function(state = {}, action) {
  switch (action.type) {
    case "GET_MEMBERS":
      return { ...state, list: action.payload };
    case "ADD_MEMBER":
      return { ...state, newmember: action.payload };
    case "CLEAR_MEMBER":
      return { ...state, newmember: action.payload };
    case "GET_MEMBER":
      return { ...state, member: action.payload };
    case "UPDATE_MEMBER":
      return {
        ...state,
        updateMember: action.payload.success,
        member: action.payload.doc
      };
    case "DELETE_MEMBER":
      return {
        ...state,
        memberDeleted: action.payload
      };
    case "CLEAR_DELETEDMBOOK":
      return {
        ...state,
        updateMember: action.payload.updateMember,
        member: action.payload.member,
        memberDeleted: action.payload.memberDeleted
      };
    default:
      return state;
  }
}
