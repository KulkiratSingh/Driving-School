export const modalReducer =  (state = "false", action) => {
    switch (action.type) {
      case "SELECTED_MODAL":
        return action.payload;
        default:
          return state;
    }
}

export const modalReducer_leftButton =  (state = "false", action) => {
  switch (action.type) {
    case "CLICKED_BUTTON":
      return action.payload;
      default:
        return state;
  }
}