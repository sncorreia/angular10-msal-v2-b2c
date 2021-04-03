/**
 * Enter here the user flows and custom policies for your B2C application,
 * To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_susi_20210403",
        forgotPassword: "B2C_1_reset_20210403",
        editProfile: "B2C_1_profile_20210403"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://secorreb2c.b2clogin.com/secorreb2c.onmicrosoft.com/B2C_1_susi_20210403",
        },
        forgotPassword: {
            authority: "https://secorreb2c.b2clogin.com/secorreb2c.onmicrosoft.com/B2C_1_reset_20210403",
        },
        editProfile: {
            authority: "https://secorreb2c.b2clogin.com/secorreb2c.onmicrosoft.com/B2C_1_profile_20210403"
        }
    },
    authorityDomain: "secorreb2c.b2clogin.com"
};

/**
 * Enter here the coordinates of your Web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig: { scopes: string[]; uri: string } = {
    scopes: ['https://secorreB2C.onmicrosoft.com/c9cf083c-bc42-4979-a76b-df8bb063bd05/user_impersonation'],
    uri: '<Add the API URL>'
};