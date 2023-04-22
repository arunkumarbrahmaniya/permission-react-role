import { createContext } from "react";

export interface IUserPayload {
    id: string,
    roles?: string[],
    permissions?: string[]
}

export interface PermissionAuthContext {
    setUser: (user: IUserPayload) => void;
    isAuthorized: (roleNames?: string[], permissionsNames?: string[]) => Promise<boolean>;
    isLoading: boolean;
}

const noUser = (): never => {
    throw new Error("You didn't set User!");
};

const PermissionContext = createContext<PermissionAuthContext>({
    setUser: noUser,
    isAuthorized: noUser,
    isLoading: false,
});

export default PermissionContext;