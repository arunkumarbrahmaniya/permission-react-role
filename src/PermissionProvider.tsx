import React, { PropsWithChildren, useCallback, useState } from "react";

export interface IUserPayload {
    id: string,
    roles: string[],
    permissions: string[]
}

//context
import PermissionContext from "./PermissionContext";

const LOCAL_STORAGE_KEY_USER = "__permissionUser";

const PermissionProvider = ({
    children
}: PropsWithChildren) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const updateUser = (newUser: IUserPayload) => {
        localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(newUser));
    };
    
    const isAuthorized = useCallback(async (roleNames: string[], permissionNames?:string[]): Promise<boolean> => {
        
        let hasAuthorization: boolean = false;
        const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER));

        setIsLoading(true)
        if(storedUser) {
            hasAuthorization = await CheckUserHasRolesOrPermissions(storedUser, roleNames, permissionNames)
        }
        setIsLoading(false)

        return hasAuthorization
    }, []);

    const CheckUserHasRolesOrPermissions = async (storedUser: IUserPayload, roleNames?: string[], permissionNames?:string[]): Promise<boolean> => {
        let hasRoles: boolean = false;
        let hasPermissions: boolean = false;

        // role checking 
        if(storedUser.roles && roleNames && storedUser.roles.length > 0) {
            const userRoles =  storedUser.roles;

            const intersection = userRoles.filter((role:any) => roleNames.includes(role));
            hasRoles = intersection.length > 0
        }

        // permission checking 
        if(storedUser.permissions && permissionNames && storedUser.permissions.length > 0) {
            const userPermissions =  storedUser.permissions;

            const intersection = userPermissions.filter((permission:any) => permissionNames.includes(permission));
            hasPermissions = intersection.length > 0
        }

        return hasRoles || hasPermissions
    };

    return <PermissionContext.Provider value={{
        setUser: updateUser,
        isAuthorized,
        isLoading
    }}>{children}
    </PermissionContext.Provider>;
};

export default PermissionProvider;