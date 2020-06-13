export default function(state = {}, action) {
  switch (action.type) {
    case "GET_GALLERYS":
      return { ...state, list: action.payload };
    case "ADD_GALLERY":
      return { ...state, newgallery: action.payload };
    case "CLEAR_GALLERY":
      return { ...state, newgallery: action.payload };
    case "GET_GALLERY":
      return { ...state, gallery: action.payload };
    case "UPDATE_GALLERY":
      return {
        ...state,
        updateGallery: action.payload.success,
        gallery: action.payload.doc
      };
    case "DELETE_GALLERY":
      return {
        ...state,
        galleryDeleted: action.payload
      };
    case "CLEAR_DELETEDGBOOK":
      return {
        ...state,
        updateGallery: action.payload.updateGallery,
        gallery: action.payload.gallery,
        galleryDeleted: action.payload.galleryDeleted
      };
    default:
      return state;
  }
}
