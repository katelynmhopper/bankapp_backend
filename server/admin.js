    const admin = require('firebase-admin');

    //firebase service account pk
    const type = "service_account";
    const project_id = "tieredbank";
    const private_key_id = "a0ef311208793bf5788f49010a2825eb115080ca";
    const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDIxA9r6YyNR509\nvy2vHW1dkSbf7MAlJzq0WM46jCC7S72Uo2CfUTf/nAiWttVvPpMg7P4TjtKSoRM/\nx2ggBOAeuPSyClqV3QD0gMw1yp5pkONdSxZkLLyAAYe09zR25ti57A/xvNO0trLf\nj204sbMi8Tu29SLh2aCgD3vY8/RHndFbyoY8qEjZQbTbjXwqVradAqIbzWrknVn5\nVM5skmTtB3vOJdobzogRZUMtsT+aV1uwI5e9uPKa849rBH91bSEG6OgaHiN7e6m3\nI+tvMZ9pOYI8gX2GKnm6SvXkdq5dBu62lLgqkivHxVgJU+7eRRnJKrX/j5il9AFB\n63SHCOv/AgMBAAECggEAV4UMufy+fkpFVEkWp7ua1Qq1WTGSk7+1ui/qeyBiFnQO\nqZDNSrZzxHSnU9hRU+UB630Ux77fsfcQ9qE9lZO6hfoYBdM4qRMGWxAYtaxmAVwd\nmaplkPbll6HTIIMRdnHs8aPkUXwBCEsK0CVstiXVEzr5TqkvcyhVeuE1Gp9CksMG\nW0UtYN0Lhibcz1HaT0UyHDr2dSGps1I5fc/8hrvBr5rbyJB5mU7dzrC/AdhqDtJn\nWgMxOqHzFiBqRYW1z0Sz1UJilb41CxszxXBRh5uUQjL8bjmY44ThTh3NsfsMCCuH\nEDjTc51iiroCyOBmtMZDOOBpLj6WXStH5lfj5G9COQKBgQDrAc6NYQM+DHhv2Y7t\nEDYhgZdUY3+Rpk5EWFvcglHpdRRIaxCO2/lRWWbLSTPAZQ8P9tc/bWjheK9RN1c2\n7dL5LHh7Af0MW8afNmEayVJDWBCT/3joLM+zPN9l9HWNp0quJiRaK+p9SqIhtKn1\nxHAWU3kTDqeelUFWrwhszeXf9wKBgQDaszfYdMFXPbjirCeg9sOimjl41By8rn3s\nWfgDt8GfjdzeD3S9p+NhIhwINhKf6GIBtuafPQzjJt4qKFU6nTOcDylSFx+AcanF\nCgKAuFJH1Nyd0Knp4LvFX9X0BTwA2TkqWUBmRTiiyi0GJD+GWY5Ct0QzOlBCZby7\noRGh1W7iOQKBgQDC0fqj5brEY54sS1VbXcciO8ZyZRHKcu4LZpywzzCMs0yfRHKz\nm9SyBcVb3VGTu7Oi7mU+5bq+wEfGsnQQy1PM0XsHrnxTFHoyXuhdRmx1+7myl2Vq\nREvjMSGZ6fDR/8+/U0trnWCFgauq+ZS0c6bgO07x54I5y04hSHVZjc91vQKBgQDG\nYlYhQt/zPGkPLW0RRWb3hADoSzj6KyrNEFu7O6AnFO+qe8jBFZ9cCC33gN1qMslc\nlsYi4qVjFGnpQgb2EY20Xch0z8bio7iFpWvZydnRkRTDD3piTlrmUuXo4iqo9mM1\nuBqD6vzSJqWq8YyyWWCDwmzaL2aIpHMMnLI65DoeeQKBgQCZt6kxSjvr/7IcyZff\ng8dFgOEdjTwIv+cZ/K8pvgwoHK8myI5DErPshQqxPYgM95ogg7LGDIhU5qBgkRqW\nijheqi0qoZjtl1TOyw3ZGGFQjay+MrMqaJyg5gXC16ErZ42z1NipcH8EyNtD7j/v\n1I7dgTaedXcM1S2eGmO8ryb5Gw==\n-----END PRIVATE KEY-----\n";
    const client_email = "firebase-adminsdk-bnbjd@tieredbank.iam.gserviceaccount.com";
    const client_id =  "100023312223900102192";
    const auth_uri = "https://accounts.google.com/o/oauth2/auth";
    const token_uri = "https://oauth2.googleapis.com/token";
    const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
    const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bnbjd%40tieredbank.iam.gserviceaccount.com";

  //credential grants access to Firebase services
  admin.initializeApp({
    credential: admin.credential.cert({
        type, 
        project_id, 
        private_key_id,
        private_key: 
            private_key.replace(/\\n/g,'\n'),
        client_email,
        client_id, 
        auth_uri, 
        token_uri, 
        auth_provider_x509_cert_url, 
        client_x509_cert_url
    }),
  });

  module.exports = admin; 