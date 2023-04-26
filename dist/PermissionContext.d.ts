import { PropsWithChildren } from "react";
export interface IUserPayload extends PropsWithChildren {
    id: any;
    roles?: any[];
    permissions?: any[];
}
export interface PermissionAuthContext {
    setUser: (user: IUserPayload) => void;
    isAuthorized: (roleNames?: any[], permissionsNames?: any[]) => Promise<boolean>;
    isLoading: boolean;
}
declare const PermissionContext: import("react").Context<PermissionAuthContext>;
export default PermissionContext;
