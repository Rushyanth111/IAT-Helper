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

How the tokens works:

`accessToken` is issued every hour or so, it is upto the client to refresh it before it expires, using the `refreshToken`

`accessToken` is self-encrypted, via JWT methods, avoiding calls to the database. [JWT](https://jwt.io)

---

# Api routes:

## Authentication API

## /auth

This Method works via the `POST` method.

The body of the object must be in the format:

The very first route you should send a registration request to, provides you with an access token that enables you to access the other functions.

```json
{
  "email": "someemail",
  "password": "password"
}
```

On error, if the user is not registered or the email/password combination is not correct, the response is 401.

On Successful authentication the JSON response will be along the lines:

```json
{
  "accountId": "KPyYgirZjqz15MM6R2cZFx",
  "email": "1@1",
  "username": "aba",
  "accountType": 1,
  "accessToken": "J4xPdDAypCDDngXtfSejqE",
  "refreshToken": "QuckEmZPoojpCtB875NhBD",
  "expires": 3600,
  "createdAt": 1586076939480
}
```

## /authref

This Method works via the `POST` method.

This route does the following things:

- Refreshes the authentication token that has been assigned to you.
- Refreshes the refresh token that has been assigned to you.

The accessToken is provided to keep a token for accesing the data available to you. This expires after 3600s or 1 hour and it is up the the user to refresh it periodically.

The refreshToken is to reobtain a new accessToken, this is valid for a maximum period of 14 days or when the user **logs out**. If the user logs out, not sending a signal to the API may cause automatic logins for already signed in accounts.

The body of the object must be in the format:

```json
{
  "refreshToken": "oCRkdiQ1Z743eqpdlJ"
}
```

The response will send back a single accessToken and refreshToken along with a time stamp and a expiry. The refresh tokens expire 14 days after the creation of the refresh token.

```json
{
  "accessToken": "J4xPdDAypCDDngXtfSejqE",
  "refreshToken": "AJKSdKL5SdKLKASLJDjlkf",
  "createdAt": 1586076939480,
  "expires": 3600
}
```

On using a token that has been expired, 401 is returned.

---

## Notification API

## /postnotif

This method works via the `POST` method.

This API call allows a notification to be sent between two users via the ID.

It requires the following pattern:

```json
{
  "accessToken": "J4xPdDAypCDDngXtfSejqE",
  "idTo": "BJKBJKLNJKBLLJASD",
  "Message": "Some Message"
}
```

It will return a 200 on success and 401 on bad token.

## /getnotifs

This method works via the `GET` Method.

This API call fetches all the of the notifications for the user with the given ID.

It requires the following format:

```json
{
  "accessToken": "rhrYW",
  "id": "YSvVuKCU"
}
```

There can be a response of an empty object, which is accompanied with a 200. 401 will be returned on error.

On 200, the body of the message will be in the format:

```json
[
  {
    "notificationId": "UUjblH",
    "idFrom": "76fMEnwbPxGW9qo7lm",
    "idTo": "vZl2p",
    "message": "Yes, this is a Message."
  },
  {
    //...
  }
  //...
]
```

## /markread

This method works via the `POST` Method.

This API call marks a notification for the user as read, and is promptly deleted on before the next call.

The format is

```json
{
  "accessToken": "f81sXvBZW0yoeeX",
  "notificationId": "rO4IdpqG5A8Rtxz507"
}
```

---

## File Uploads

Applies to file uploads. Leave this for now.

## /UploadFile

## /DownloadFile

---

## Comment API

Applies to documents.

## /postcomment

Post A comment on a given document, must provide the document ID.

```json
{
  "accessToken": "4IzoCW",
  "documentId": "VjRbsLsZi",
  "comment": "UUX5JPDo" //Probably in Markdown
}
```

On Success 200 is returned, else 400 on failure.

## /getcomments

Requires this format:

```json
{
  "accessToken": "hqNupFj8lX5TEKw",
  "documentId": "pJ7TwZJmWaPQO"
}
```

Upon Success the returned Json will be

```json
[
  {
    "commentId": "",
    "username": "",
    "comment": "",
    "commentDate": ""
  },
  {
    //...
  }
]
```

---

## User API

# /getUser

Obtains the details of the user that is requested.

This is done via the `GET` method

```json
{
  "accessToken": "a3lI0qfEGlb44euSUk7",
  "userId": "vCWemQvITO"
}
```

The response will be:

```json
{
  "username": "7mWYzIJYmhbbMA77Sr",
  "email": "cunkuwlih@iwuwa.sx"
}
```
