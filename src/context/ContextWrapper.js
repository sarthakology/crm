import { useState } from "react";
import GlobalContext from "./GlobalContext";


export default function ContextWrapper({ children }) {

  const [loader, setLoader] = useState(false);
  const [showAddAdminModel, setShowAddAdminModel] = useState(false)
  const [showAddCallerModel, setShowAddCallerModel] = useState(false)


  return (
    <GlobalContext.Provider
      value={{
        loader,
        setLoader,
        showAddAdminModel, 
        setShowAddAdminModel,
        showAddCallerModel, 
        setShowAddCallerModel
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}