/// <reference types="react" />
export interface UserPayload {
    id: string;
    roles?: string[];
    permissions?: string[];
}
export interface PermifyAuthContext {
    setUser: (user: UserPayload) => void;
    isAuthorized: (roleNames?: string[], permissionsNames?: string[]) => Promise<boolean>;
    isLoading: boolean;
}
declare const PermifyContext: import("react").Context<PermifyAuthContext>;
export default PermifyContext;
