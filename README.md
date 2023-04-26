# Permission React Role
Permission React Role is a comprehensive and lightweight solution for managing access control and user permissions in React applications. It offers a range of components, hooks, and helper methods that enable you to easily implement access checks and ensure that users have the appropriate permissions throughout your application.
# Installation
Use npm to install: 

```shell
npm install react-permission-role
```
Use yarn to install:

```shell
yarn add react-permission-role
```

# How to use

## `PermissionProvider`

To perform access checks in a specific part of your application, you can use PermissionProvider to wrap that section of the code. By doing so, you can take advantage of the Permission components, hooks, and helper methods that are designed to simplify access control and user permission management. When using PermissionProvider, be sure to pass the necessary props to enable access to these features throughout your application.

```javascript
import React from "react";
import { PermissionProvider } from "react-permission-role";
const App = () => {
    return (
        <PermissionProvider>
            {/* All the Application layers */}
        </PermissionProvider>;
    )
};
export default App;
```
### User Identification

To verify user roles or permissions, it's essential to set the logged-in user using the ```setUser``` function. We recommend calling this function within the promise of your login function. By doing so, you can ensure that the user's role and permissions are properly set and available throughout your application.

You can set the user by using the ```usePermission``` hook as follows:- 

```javascript

import { usePermission } from 'react-permission-role';
const { setUser } = usePermission();
const Userlogin = async (event) => {
    const response = await Login(username, password);
    setUser({
       id: "userID",
       roles: ["Role1", "Role2"],
       permissions: ["add-user", "delete-user", "update-user"]
    })        
};
```

Or you can use the  ```PermissionContext``` as well as follows:-

```javascript
import React from "react";
import { PermissionContext } from "react-permission-role";
const Authentication = () => {
    const UserLogin = (setUser) => {
        return async (event) => {
            const response = await Login(username, password);
            setUser({
                id: "userID",
                roles: ["Role1", "Role2"], 
                permissions: ["add-user", "delete-user", "update-user"]
            })
        };
    };
    return (
        <PermissionContext.Consumer>
            {({ setUser }) => (
                <form onSubmit={Login(setUser)}>
                    ......
                    ......
                    ......
                </form>
            )}
        </PermissionContext.Consumer>; 
    )
};
export default Authentication;
```

## `AllowedAccess` 

If you have components or UI layers that should only be accessible to users with authorization, you can use the AllowedAccess wrapper component. This component enables you to easily restrict access to certain parts of your application based on the user's permissions. By wrapping these components or UI layers in AllowedAccess, you can ensure that only authorized users are able to access them.

You can check roles and permissions of the user with giving them as props.

```javascript
import React from "react";
import { AllowedAccess } from "react-permission-role";
const ComponentName = () => {
    return (
        <AllowedAccess
            roles={["Role1", "Role2"]} 
            permissions="add-user" 
            renderAuthFailed={<p>Not Allowed to see this!</p>}
            isLoading={<Spinner/>}
        >
            <button type="button"> Delete </button>
        </AllowedAccess>
    )
};
export default ComponentName;
```

## `isAuthorized(roleNames, permissionNames)`

The isAuthorized function is a useful helper method that enables you to determine whether a user is authorized to perform a specific action based on the given parameters. When called, the function returns a Promise that resolves to true if the user is authorized and false otherwise. This allows you to easily perform access checks and ensure that users have the appropriate permissions to perform the desired action.

Using isAuthorized through the usePermission hook is as follows:-

```javascript
import React, {useState, useEffect} from "react";
import { usePermission } from "react-permission-role";
const ComponentName = () => {
    const { isAuthorized, isLoading } = usePermission();
    useEffect(() => {
        const fetchData = async () => {
            // You can send roles and permissions accordingly
            // Send empty array or null for first param to check permissions only .
            if (await isAuthorized(["admin", "manager"], "user-delete")) {
                //next Process
            }
        };
        fetchData();
    },[]);
    return (
        <>  
            {isLoading && <span>Loading...</span>}
            {dataFetched &&
                //render the protected component
            }
        </>;
    )
};

export default ComponentName;
```

# License
The MIT License (MIT)