/// <reference types="react" />
export interface IUserPayload {
    id: string;
    roles?: string[];
    permissions?: string[];
}
export interface PermissionAuthContext {
    setUser: (user: IUserPayload) => void;
    isAuthorized: (roleNames?: string[], permissionsNames?: string[]) => Promise<boolean>;
    isLoading: boolean;
}
declare const PermissionContext: import("react").Context<PermissionAuthContext>;
export default PermissionContext;
