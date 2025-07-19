import React from "react";

const GlobalContext = React.createContext({
  loader: false,
  setLoader: () => {},
  showAddAdminModel: false,
  setShowAddAdminModel: () => {},
  showAddCallerModel: false, 
  setShowAddCallerModel: () => {},
});

export default GlobalContext;
