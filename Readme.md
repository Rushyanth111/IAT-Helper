# iat-helper

This is a helper service that handles tokens, authentication and notifications and can be expanded upon to cover the other functions as required.

# Structure of the current database:

Each of the object keys are a file, inner objects are to be parsed with a nedb reader.

```json
{
  "info": {
    "_id": "primary",
    "accountId": "primary",
    "email": "PK",
    "username": "",
    "password": "encrypted",
    "accountType": [1, 2, 3]
  },
  "notifications": {
    "notificationId": "primary",
    "idFrom": "",
    "idTo": "",
    "message": "",
    "read": "boolean"
  },
  "tokens": {
    "accountId": "primary",
    "accessToken": "unique",
    "expires": "",
    "refreshToken": "", //Expires at 14days in production.
    "createdAt": ""
  }
}
```

Both the notifications and tokens files are periodically refreshed to expire any notifications that are read and any tokens that have been expired.

---
