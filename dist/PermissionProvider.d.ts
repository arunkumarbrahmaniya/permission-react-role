import { PropsWithChildren } from "react";
export interface IUserPayload extends PropsWithChildren {
    id: any;
    roles: any[];
    permissions: any[];
}
declare const PermissionProvider: ({ children }: PropsWithChildren) => JSX.Element;
export default PermissionProvider;
