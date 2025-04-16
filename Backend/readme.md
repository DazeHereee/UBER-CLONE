# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

### Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field               | Type   | Required | Description                              |
|---------------------|--------|----------|------------------------------------------|
| `fullname.firstname`| String | Yes      | The first name of the user (min 3 chars).|
| `fullname.lastname` | String | No       | The last name of the user (min 3 chars). |
| `email`             | String | Yes      | The email address of the user.           |
| `password`          | String | Yes      | The password for the user (min 6 chars). |

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses Body
The response body must be in JSON format and include the following fields:

| Field               | Type   | Required | Description                              |
|---------------------|--------|----------|------------------------------------------|
| `fullname.firstname`| String | Yes      | The first name of the user (min 3 chars).|
| `fullname.lastname` | String | No       | The last name of the user (min 3 chars). |
| `email`             | String | Yes      | The email address of the user.           |
| `password`          | String | Yes      | The password for the user (min 6 chars). |
| `token`             | String | ---      | It return a generated token.             | 

### Responses Example
#### Success (201 Created)
```json
{
  "token": "your-jwt-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error (400 Bad Request)
Occurs when validation fails or required fields are missing.
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "error": "Internal Server Error"
}
```

### Notes
- Ensure that the `email` field is unique.
- Passwords are hashed before being stored in the database.
- A valid JWT secret must be set in the environment variable `JWT_SECRET`.

---

## Endpoint: `/users/login`

### Description
This endpoint is used to authenticate a user. It validates the input data, checks the email and password, and returns a JSON Web Token (JWT) if the credentials are valid.

### Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field      | Type   | Required | Description                              |
|------------|--------|----------|------------------------------------------|
| `email`    | String | Yes      | The email address of the user.           |
| `password` | String | Yes      | The password for the user (min 6 chars). |

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses Body
The response body must be in JSON format and include the following fields:

| Field      | Type   | Description                              |
|------------|--------|------------------------------------------|
| `token`    | String | The generated JWT for the authenticated user. |
| `user`     | Object | The authenticated user's details.        |

### Responses Example
#### Success (200 OK)
```json
{
  "token": "your-jwt-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error (400 Bad Request)
Occurs when validation fails or required fields are missing.
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Error (401 Unauthorized)
Occurs when the email or password is incorrect.
```json
{
  "message": "Invalid email or password"
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "error": "Internal Server Error"
}
```

### Notes
- Ensure that the `email` and `password` fields are correct.
- A valid JWT secret must be set in the environment variable `JWT_SECRET`.

---

## Endpoint: `/users/profile`

### Description
This endpoint is used to retrieve the profile of the authenticated user. It requires the user to be logged in and provides the user's details.

### Method
`GET`

### Headers
| Header          | Type   | Required | Description                              |
|------------------|--------|----------|------------------------------------------|
| `Authorization` | String | Yes      | The Bearer token for authentication.     |

### Responses Body
The response body must be in JSON format and include the following fields:

| Field               | Type   | Description                              |
|---------------------|--------|------------------------------------------|
| `fullname.firstname`| String | The first name of the user.              |
| `fullname.lastname` | String | The last name of the user.               |
| `email`             | String | The email address of the user.           |

### Responses Example
#### Success (200 OK)
```json
{
  "_id": "user-id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Error (401 Unauthorized)
Occurs when the user is not authenticated.
```json
{
  "message": "Unauthorized"
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "error": "Internal Server Error"
}
```

### Notes
- Ensure the `Authorization` header contains a valid Bearer token.

---

## Endpoint: `/users/logout`

### Description
This endpoint is used to log out the authenticated user. It clears the authentication token from cookies and blacklists the token to prevent further use.

### Method
`GET`

### Headers
| Header          | Type   | Required | Description                              |
|------------------|--------|----------|------------------------------------------|
| `Authorization` | String | Yes      | The Bearer token for authentication.     |

### Responses Body
The response body must be in JSON format and include the following fields:

| Field      | Type   | Description                              |
|------------|--------|------------------------------------------|
| `message`  | String | A success message indicating logout.     |

### Responses Example
#### Success (200 OK)
```json
{
  "message": "Logged out successfully"
}
```

#### Error (401 Unauthorized)
Occurs when the user is not authenticated.
```json
{
  "message": "Unauthorized"
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "error": "Internal Server Error"
}
```

### Notes
- The token is blacklisted to prevent reuse.
- Ensure the `Authorization` header contains a valid Bearer token.

---

## Endpoint: `/captains/register`

### Description
This endpoint is used to register a new captain. It validates the input data, hashes the password, and creates a new captain in the database. Upon successful registration, it returns the captain's details.

### Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field                  | Type   | Required | Description                              |
|------------------------|--------|----------|------------------------------------------|
| `fullname.firstname`   | String | Yes      | The first name of the captain (min 3 chars). |
| `fullname.lastname`    | String | No       | The last name of the captain (min 3 chars). |
| `email`                | String | Yes      | The email address of the captain.        |
| `password`             | String | Yes      | The password for the captain (min 6 chars). |
| `vehicle.color`        | String | Yes      | The color of the vehicle (min 3 chars).  |
| `vehicle.plate`        | String | Yes      | The license plate of the vehicle (min 3 chars). |
| `vehicle.capacity`     | Number | Yes      | The seating capacity of the vehicle.     |
| `vehicle.vehicleType`  | String | Yes      | The type of the vehicle (`car`, `motorcycle`, or `auto`). |

### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses Body
The response body must be in JSON format and include the following fields:

| Field                  | Type   | Description                              |
|------------------------|--------|------------------------------------------|
| `fullname.firstname`   | String | The first name of the captain.           |
| `fullname.lastname`    | String | The last name of the captain.            |
| `email`                | String | The email address of the captain.        |
| `vehicle.color`        | String | The color of the vehicle.                |
| `vehicle.plate`        | String | The license plate of the vehicle.        |
| `vehicle.capacity`     | Number | The seating capacity of the vehicle.     |
| `vehicle.vehicleType`  | String | The type of the vehicle.                 |

### Responses Example
#### Success (201 Created)
```json
{
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error (400 Bad Request)
Occurs when validation fails or required fields are missing.
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "error": "Internal Server Error"
}
```

### Notes
- Ensure that the `email` field is unique.
- Passwords are hashed before being stored in the database.
- The `vehicleType` must be one of `car`, `motorcycle`, or `auto`.

---

## Endpoint: `/captains/login`

### Description
This endpoint is used to authenticate a captain. It validates the input data, checks the email and password, and returns a JSON Web Token (JWT) if the credentials are valid.

### Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field      | Type   | Required | Description                              |
|------------|--------|----------|------------------------------------------|
| `email`    | String | Yes      | The email address of the captain.        |
| `password` | String | Yes      | The password for the captain (min 6 chars). |
### Example Request
```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

### Responses Body
The response body must be in JSON format and include the following fields:

| Field      | Type   | Description                              |
|------------|--------|------------------------------------------|
| `token`    | String | The generated JWT for the authenticated captain. |
| `captain`  | Object | The authenticated captain's details.     |

### Responses Example
#### Success (200 OK)
```json
{
  "token": "your-jwt-token",
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error (400 Bad Request)
Occurs when validation fails or required fields are missing.
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Error (401 Unauthorized)
Occurs when the email or password is incorrect.
```json
{
  "message": "Invalid email or password"
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "error": "Internal Server Error"
}
```

### Notes
- Ensure that the `email` and `password` fields are correct.
- A valid JWT secret must be set in the environment variable `JWT_SECRET`.

---

## Endpoint: `/captains/profile`

### Description
This endpoint is used to retrieve the profile of the authenticated captain. It requires the captain to be logged in and provides the captain's details.

### Method
`GET`

### Headers
| Header          | Type   | Required | Description                              |
|------------------|--------|----------|------------------------------------------|
| `Authorization` | String | Yes      | The Bearer token for authentication.     |

### Responses Body
The response body must be in JSON format and include the following fields:

| Field                  | Type   | Description                              |
|------------------------|--------|------------------------------------------|
| `fullname.firstname`   | String | The first name of the captain.           |
| `fullname.lastname`    | String | The last name of the captain.            |
| `email`                | String | The email address of the captain.        |
| `vehicle.color`        | String | The color of the vehicle.                |
| `vehicle.plate`        | String | The license plate of the vehicle.        |
| `vehicle.capacity`     | Number | The seating capacity of the vehicle.     |
| `vehicle.vehicleType`  | String | The type of the vehicle.                 |

### Responses Example
#### Success (200 OK)
```json
{
  "_id": "captain-id",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Error (401 Unauthorized)
Occurs when the captain is not authenticated.
```json
{
  "message": "Unauthorized"
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "error": "Internal Server Error"
}
```

### Notes
- Ensure the `Authorization` header contains a valid Bearer token.

---

## Endpoint: `/captains/logout`

### Description
This endpoint is used to log out the authenticated captain. It clears the authentication token from cookies and blacklists the token to prevent further use.

### Method
`GET`

### Headers
| Header          | Type   | Required | Description                              |
|------------------|--------|----------|------------------------------------------|
| `Authorization` | String | Yes      | The Bearer token for authentication.     |

### Responses Body
The response body must be in JSON format and include the following fields:

| Field      | Type   | Description                              |
|------------|--------|------------------------------------------|
| `message`  | String | A success message indicating logout.     |

### Responses Example
#### Success (200 OK)
```json
{
  "message": "Logged out successfully"
}
```

#### Error (401 Unauthorized)
Occurs when the captain is not authenticated.
```json
{
  "message": "Unauthorized"
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "error": "Internal Server Error"
}
```

### Notes
- The token is blacklisted to prevent reuse.
- Ensure the `Authorization` header contains a valid Bearer token.
