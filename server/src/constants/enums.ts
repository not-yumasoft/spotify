export enum Endpoint {
  USERS = 'users',
  AUTH = 'auth',
  POSTS = 'posts',
}

export enum EntityName {
  USER = 'user',
  POST = 'post',
}

export enum MetadataKey {
  IS_PUBLIC_ENDPOINT = 'is-public-endpoint',
  REQUIRED_ROLES = 'required-roles',
}

export enum ApiOperationSummary {
  MAIN_STATUS = 'get backend status',

  AUTH_REFRESH_TOKEN = 'refresh JWT token',
  AUTH_LOGIN = 'login',
  AUTH_REGISTER = 'register new user',
  AUTH_LOGOUT = 'logout',
  AUTH_CANCEL_SESSION = 'cancel session',

  USERS_GET_ALL = 'get all users (admin)',
  USERS_CREATE_USER = 'create new user (admin)',
  USERS_GET_CURRENT = 'get current user info',
  USERS_UPDATE_CURRENT = 'update current user',
  USERS_DELETE_CURRENT = 'delete current user',
  USERS_UPDATE_CURRENT_PICTURE = 'update current user profile picture',
  USERS_DELETE_CURRENT_PICTURE = 'delete current user profile picture',
  USERS_DELETE_USER = 'delete user by id (admin)',
  USERS_BAN_USER = 'ban / unban user by id (admin)',
  USERS_UPDATE_USER_ROLE = 'update user role (admin)',
  USERS_UPDATE_USER_STATUS = 'update user status by id',

  POSTS_GET_ALL = 'get all user posts',
  POSTS_CREATE = 'create post',
  POSTS_UPDATE_TEXT = 'update post text by id',
  POSTS_DELETE_BY_ID = 'delete post by id',
}

export enum Cookie {
  ACCESS_TOKEN = 'access-token',
}

export enum HttpHeader {
  AUTHORIZATION = 'Authorization',
}

export enum ErrorMessage {
  UNKNOWN_EXCEPTION = 'Internal server exception',
  UNAUTHORIZED = 'Unauthorized',
  BAD_REQUEST = 'Bad request',
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}
