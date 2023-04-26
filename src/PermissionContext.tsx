import { createContext, PropsWithChildren } from "react";

export interface IUserPayload extends PropsWithChildren{
    id: any,
    roles?: any[],
    permissions?: any[]
}

export interface PermissionAuthContext {
    setUser: (user: IUserPayload) => void;
    isAuthorized: (roleNames?: any[], permissionsNames?: any[]) => Promise<boolean>;
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