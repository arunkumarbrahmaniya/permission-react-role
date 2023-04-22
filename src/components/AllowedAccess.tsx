import * as React from 'react';
import { useEffect, useState, PropsWithChildren } from 'react'

export interface IUserPayload {
  id: string,
  roles: string[],
  permissions: string[]
}

const LOCAL_STORAGE_KEY_USER = "__permissionUser";

export interface HasAccessProps {
  roles?: string[],
  permissions?: string[]
  isLoading?: React.ReactElement,
  renderAuthFailed?: React.ReactElement
}

const AllowedAccess = ({
  roles,
  permissions,
  isLoading,
  renderAuthFailed,
  children
}: PropsWithChildren<HasAccessProps>) => {
  const [allowedAccess, setAllowedAccess] = useState(false)
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER));

    if(!storedUser) {
      console.log('There is no user provided for permission! You should set user to perfom the access check');
      return;
    } 

    setChecking(true)

    // check the roles here
    if (roles && storedUser.roles && storedUser.roles.length > 0) {
      const intersection = storedUser.roles.filter((role: string) => roles.includes(role));
      if (intersection.length > 0) setAllowedAccess(true)
    }

    // check the permission here
    if (permissions && storedUser.permissions && storedUser.permissions.length > 0) {
      const intersection = storedUser.permissions.filter((permission: string) => permissions.includes(permission));
      if (intersection.length > 0) setAllowedAccess(true)
    }

    setChecking(false)

  }, [roles, permissions])

  if (!allowedAccess && checking) {
    return isLoading
  }
  
  if (allowedAccess) {
    return (
      // children is of type ReactNode which already includes ReactFragment
        {children}
    )
  }

  if (renderAuthFailed) {
    return renderAuthFailed
  }

  return null
}

export default AllowedAccess;
