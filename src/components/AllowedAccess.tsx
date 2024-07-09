import * as React from 'react';
import { useEffect, useState, PropsWithChildren } from 'react'

export interface IUserPayload {
  id: any;
  roles: any[];
  permissions: any[];
}

const LOCAL_STORAGE_KEY_USER = "__permissionUser";

export interface HasAccessProps {
  roles?: any[];
  permissions?: any[];
  isLoading?: React.ReactElement;
  renderAuthFailed?: React.ReactElement;
  children?: any;
}

const AllowedAccess = ({
  roles,
  permissions,
  renderAuthFailed,
  isLoading,
  children
}: PropsWithChildren<HasAccessProps>) => {
  const [allowedAccess, setAllowedAccess] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER));

    if(!storedUser) {
      console.log('There is no user provided for permission! You should set user to perfom the access check');
      return;
    } 

    setChecking(true)

    // check the roles here
    if (roles && storedUser.roles && storedUser.roles.length > 0) {
      const intersection = storedUser.roles.filter((role: any) => roles.includes(role));
      if (intersection.length > 0) setAllowedAccess(true)
    }

    // check the permission here
    if (permissions && storedUser.permissions && storedUser.permissions.length > 0) {
      const intersection = storedUser.permissions.filter((permission: any) => permissions.includes(permission));
      if (intersection.length > 0) setAllowedAccess(true)
    }

    setChecking(false)

  }, [roles, permissions])

  if (!allowedAccess && checking) {
    return isLoading
  }
  
  if (allowedAccess) {
    return (
      // Render the children prop directly
      children
    )
  }

  if (renderAuthFailed) {
    return renderAuthFailed
  }

  return null
}

export default AllowedAccess;
