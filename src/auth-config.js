export const msalConfig = {
    auth: {
        clientId: "30438524-af83-4328-8f20-2385084a30de",
        authority: 'https://login.microsoftonline.com/common/',
        redirectUri: 'http://localhost:3000/',
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["openid","profile"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const apiRequest = {
    scopes: ["user.read"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};