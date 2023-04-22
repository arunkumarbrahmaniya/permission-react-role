import { PropsWithChildren } from "react";
export interface IUserPayload {
    id: string;
    roles: string[];
    permissions: string[];
}
declare const PermissionProvider: ({ children }: PropsWithChildren) => JSX.Element;
export default PermissionProvider;
