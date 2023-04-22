import * as React from 'react';
import { PropsWithChildren } from 'react';
export interface UserPayload {
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
declare const HasAccess: ({ roles, permissions, isLoading, renderAuthFailed, children }: PropsWithChildren<HasAccessProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | {
    children: React.ReactNode;
};
export default HasAccess;
