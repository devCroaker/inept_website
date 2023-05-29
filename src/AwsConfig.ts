export const config = {
  cognito: {
    REGION: process.env.REACT_APP_REGION!,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID!,
    APP_CLIENT_ID: process.env.REACT_APP_APP_CLIENT_ID!,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID!,
  },
};
