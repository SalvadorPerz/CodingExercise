# CodingExercise API

## Overview
This project is a RESTful API built with TypeScript and JavaScript. It uses npm for package management.

## Installation
To install the project dependencies, run:
```bash
npm install
```

## Running the API
To start the API server, use:
```bash
npm start
```

## Endpoints

### 1. `GET /allUsersSorted`
**Description:** Retrieves a list of all users sorted by a specified property.

**Query Parameters:**
- `orderBy`: The property to sort the users by.

**Response:**
```json
[
  {
    "name": "Miroslav",
    "favoriteFood": "Sushi",
    "favoriteMovie": "American Psycho",
    "status": "Active",
    "runOn": "2025-02-07T06:52:23.373Z"
  },
  {
    "name": "Matt",
    "favoriteFood": "Brisket Tacos",
    "favoriteMovie": "The Princess Bride",
    "status": "Active",
    "runOn": "2025-02-07T06:52:23.373Z"
  }
]
```

### 2. `GET /allUsers`
**Description:** Retrieves a list of all users.

**Response:**
```json
[
  {
    "name": "Rocky",
    "favoriteFood": "Sushi",
    "favoriteMovie": "Back to The Future",
    "status": "Inactive",
    "runOn": "2025-02-07T06:52:23.373Z"
  },
  {
    "name": "Miroslav",
    "favoriteFood": "Sushi",
    "favoriteMovie": "American Psycho",
    "status": "Active",
    "runOn": "2025-02-07T06:52:23.373Z"
  }
]
```

### 3. `GET /activeUsers`
**Description:** Retrieves a list of all active users.

**Response:**
```json
[
  {
    "name": "Miroslav",
    "favoriteFood": "Sushi",
    "favoriteMovie": "American Psycho",
    "status": "Active",
    "runOn": "2025-02-07T06:52:23.373Z"
  },
  {
    "name": "Matt",
    "favoriteFood": "Brisket Tacos",
    "favoriteMovie": "The Princess Bride",
    "status": "Active",
    "runOn": "2025-02-07T06:52:23.373Z"
  }
]
```

### 4. `POST /userObject/updateDateOnObjects`
**Description:** Updates the date on user objects.

**Response:**
```json
{
  "message": "Date updated successfully"
}
```

## Error Handling
All endpoints return appropriate HTTP status codes and error messages in case of failures.

## License
This project is licensed under the MIT License.
