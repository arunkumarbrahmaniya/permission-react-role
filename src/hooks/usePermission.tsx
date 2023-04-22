import { useContext } from "react";
import PermissionContext from "../PermissionContext";

const usePermission = () => useContext(PermissionContext);

export default usePermission;