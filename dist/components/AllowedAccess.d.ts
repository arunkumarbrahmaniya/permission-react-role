import * as React from 'react';
import { PropsWithChildren } from 'react';
export interface IUserPayload {
    id: string;
    roles: string[];
    permissions: string[];
}
export interface HasAccessProps {
    roles?: string[];
    permissions?: string[];
    isLoading?: React.ReactElement;
    renderAuthFailed?: React.ReactElement;
}
declare const AllowedAccess: ({ roles, permissions, isLoading, renderAuthFailed, children }: PropsWithChildren<HasAccessProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | {
    children: React.ReactNode;
};
export default AllowedAccess;
