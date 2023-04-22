import { PropsWithChildren } from "react";
export interface UserPayload {
    id: string;
    roles: string[];
    permissions: string[];
}
declare const PermifyProvider: ({ children }: PropsWithChildren) => JSX.Element;
export default PermifyProvider;
