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

---

## Endpoint: `/maps/get-coordinates`

### Description
This endpoint retrieves the geographical coordinates (latitude and longitude) for a given address.

### Method
`GET`

### Query Parameters
| Parameter | Type   | Required | Description                              |
|-----------|--------|----------|------------------------------------------|
| `address` | String | Yes      | The address for which coordinates are needed. |

### Example Request
```
GET /maps/get-coordinates?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA
```

### Responses Body
The response body must be in JSON format and include the following fields:

| Field | Type   | Description                              |
|-------|--------|------------------------------------------|
| `ltd` | Number | The latitude of the address.             |
| `lng` | Number | The longitude of the address.            |

### Responses Example
#### Success (200 OK)
```json
{
  "ltd": 37.4224764,
  "lng": -122.0842499
}
```

#### Error (400 Bad Request)
Occurs when the `address` parameter is missing or invalid.
```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "address",
      "location": "query"
    }
  ]
}
```

#### Error (404 Not Found)
Occurs when the coordinates for the given address cannot be found.
```json
{
  "message": "Coordinate not Found"
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "message": "Internal server error"
}
```

---

## Endpoint: `/maps/get-distance-time`

### Description
This endpoint calculates the distance and estimated travel time between two locations.

### Method
`GET`

### Query Parameters
| Parameter      | Type   | Required | Description                              |
|----------------|--------|----------|------------------------------------------|
| `origin`       | String | Yes      | The starting location.                   |
| `destination`  | String | Yes      | The destination location.                |

### Example Request
```
GET /maps/get-distance-time?origin=New+York,+NY&destination=Los+Angeles,+CA
```

### Responses Body
The response body must be in JSON format and include the following fields:

| Field          | Type   | Description                              |
|----------------|--------|------------------------------------------|
| `distance`     | Object | The distance information (text and value in meters). |
| `duration`     | Object | The duration information (text and value in seconds). |

### Responses Example
#### Success (200 OK)
```json
{
  "distance": {
    "text": "2,789 miles",
    "value": 4487936
  },
  "duration": {
    "text": "1 day 18 hours",
    "value": 155520
  }
}
```

#### Error (400 Bad Request)
Occurs when the `origin` or `destination` parameter is missing or invalid.
```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "origin",
      "location": "query"
    }
  ]
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "message": "Internal server error"
}
```

---

## Endpoint: `/maps/get-suggestions`

### Description
This endpoint provides location suggestions based on user input.

### Method
`GET`

### Query Parameters
| Parameter | Type   | Required | Description                              |
|-----------|--------|----------|------------------------------------------|
| `input`   | String | Yes      | The partial input for which suggestions are needed. |

### Example Request
```
GET /maps/get-suggestions?input=New+York
```

### Responses Body
The response body must be in JSON format and include the following fields:

| Field         | Type   | Description                              |
|---------------|--------|------------------------------------------|
| `predictions` | Array  | An array of location suggestions.        |

### Responses Example
#### Success (200 OK)
```json
{
  "predictions": [
    "New York, NY, USA",
    "New York City, NY, USA",
    "New York County, NY, USA"
  ]
}
```

#### Error (400 Bad Request)
Occurs when the `input` parameter is missing or invalid.
```json
{
  "errors": [
    {
      "msg": "Invalid value",
      "param": "input",
      "location": "query"
    }
  ]
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "message": "Internal server error"
}
```

---

## Endpoint: `/rides/create`

### Description
This endpoint is used to create a new ride. It calculates the fare based on the pickup and destination locations and the selected vehicle type.

### Method
`POST`

### Headers
| Header          | Type   | Required | Description                              |
|------------------|--------|----------|------------------------------------------|
| `Authorization` | String | Yes      | The Bearer token for authentication.     |

### Request Body
The request body must be in JSON format and include the following fields:

| Field          | Type   | Required | Description                              |
|----------------|--------|----------|------------------------------------------|
| `pickup`       | String | Yes      | The pickup location.                     |
| `destination`  | String | Yes      | The destination location.                |
| `vehicleType`  | String | Yes      | The type of vehicle (`auto`, `car`, `moto`). |

### Example Request
```json
{
  "pickup": "1600 Amphitheatre Parkway, Mountain View, CA",
  "destination": "1 Infinite Loop, Cupertino, CA",
  "vehicleType": "car"
}
```

### Responses Body
The response body must be in JSON format and include the following fields:

| Field          | Type   | Description                              |
|----------------|--------|------------------------------------------|
| `user`         | String | The ID of the user who created the ride. |
| `pickup`       | String | The pickup location.                     |
| `destination`  | String | The destination location.                |
| `fare`         | Number | The calculated fare for the ride.        |
| `otp`          | String | The OTP for ride verification.           |
| `status`       | String | The status of the ride (`pending` by default). |

### Responses Example
#### Success (201 Created)
```json
{
  "user": "user-id",
  "pickup": "1600 Amphitheatre Parkway, Mountain View, CA",
  "destination": "1 Infinite Loop, Cupertino, CA",
  "fare": 150.75,
  "otp": "123456",
  "status": "pending"
}
```

#### Error (400 Bad Request)
Occurs when validation fails or required fields are missing.
```json
{
  "errors": [
    {
      "msg": "Invalid pickup address",
      "param": "pickup",
      "location": "body"
    }
  ]
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "message": "Internal server error"
}
```

---

## Endpoint: `/rides/getFare`

### Description
This endpoint calculates the estimated fare for a ride based on the pickup and destination locations.

### Method
`GET`

### Headers
| Header          | Type   | Required | Description                              |
|------------------|--------|----------|------------------------------------------|
| `Authorization` | String | Yes      | The Bearer token for authentication.     |

### Query Parameters
| Parameter      | Type   | Required | Description                              |
|----------------|--------|----------|------------------------------------------|
| `pickup`       | String | Yes      | The pickup location.                     |
| `destination`  | String | Yes      | The destination location.                |

### Example Request
```
GET /rides/getFare?pickup=1600+Amphitheatre+Parkway,+Mountain+View,+CA&destination=1+Infinite+Loop,+Cupertino,+CA
```

### Responses Body
The response body must be in JSON format and include the following fields:

| Field          | Type   | Description                              |
|----------------|--------|------------------------------------------|
| `auto`         | Number | The estimated fare for an auto.          |
| `car`          | Number | The estimated fare for a car.            |
| `moto`         | Number | The estimated fare for a motorcycle.     |

### Responses Example
#### Success (200 OK)
```json
{
  "auto": 50.25,
  "car": 150.75,
  "moto": 40.50
}
```

#### Error (400 Bad Request)
Occurs when validation fails or required fields are missing.
```json
{
  "errors": [
    {
      "msg": "Invalid pickup address",
      "param": "pickup",
      "location": "query"
    }
  ]
}
```

#### Error (500 Internal Server Error)
Occurs when there is an issue on the server side.
```json
{
  "message": "Internal server error"
}
```

---

### Notes
- Ensure that the `Authorization` header contains a valid Bearer token for all endpoints.
- The fare is calculated based on the distance and duration between the pickup and destination locations.
