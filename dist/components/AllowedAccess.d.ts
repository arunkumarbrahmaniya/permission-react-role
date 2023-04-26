import * as React from 'react';
import { PropsWithChildren } from 'react';
export interface IUserPayload {
    id: any;
    roles: any[];
    permissions: any[];
}
export interface HasAccessProps {
    roles?: any[];
    permissions?: any[];
    isLoading?: React.ReactElement;
    renderAuthFailed?: React.ReactElement;
    children?: any;
}
declare const AllowedAccess: ({ roles, permissions, renderAuthFailed, isLoading, children }: PropsWithChildren<HasAccessProps>) => any;
export default AllowedAccess;
