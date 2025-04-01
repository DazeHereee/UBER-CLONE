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
