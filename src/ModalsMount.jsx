import { useContext } from "react";
import GlobalContext from "./context/GlobalContext";
import Loader from "./modals/Loader";
import AddAdminModal from "./modals/AddAdminModal";
import AddCallerModal from "./modals/AddCallerModal";


const ModalsMount = () => {
  const {  loader , showAddAdminModel, showAddCallerModel } = useContext(GlobalContext);


  return (
    <>
      {loader && <Loader />}
      {showAddAdminModel && <AddAdminModal/>}
{showAddCallerModel && <AddCallerModal/>}
    </>
  );
};

export default ModalsMount;
