export const selectedHeader = (activeStatus = "home", action) => {
  switch (action.type) {
    case "SELECTED_HEADER_TITLE":
      return action.payload;
    default:
      return activeStatus;
  }
};

export const selectedPackages =  (activePackage = "package_1", action) => {
  switch (action.type) {
    case "SELECTED_PACKAGE_TITLE":
      return action.payload;
      default:
        return activePackage;
  }
}


