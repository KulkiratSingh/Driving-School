import unsplash from "../apis/unsplash";

export const fetchPhotos = () => {
  return async function (dispatch) {
    const responce = await unsplash.get("/search/photos", {
      params: { query: "cars", orientation: "landscape", page: 1, per_page: 6 },
    });
    dispatch({ type: "FETCH_PHOTOS", payload: responce.data });
  };
};


export const activeMenu = (item) => {
  return {
    type: "SELECTED_HEADER_TITLE",
    payload: item,
  };
};

export const activePackage = (item) => {
  return {
    type: "SELECTED_PACKAGE_TITLE",
    payload: item,
  };
};

export const leftButton = (item) => {
  return {
    type: "CLICKED_BUTTON",
    payload: item,
  };
};

export const activeModal = (item) => {
  return {
    type: "SELECTED_MODAL",
    payload: item,
  };
};

export const submitForm = (item) => {
  return {
    type: "FORM_SUBMITTED",
    payload: item,
  };
};


