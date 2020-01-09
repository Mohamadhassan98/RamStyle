const baseServerUrl = 'http://198.143.182.157/';

const _urls = {
    allCategories: 'store/categories/',
    allProducts: 'store/products/',
    signIn: 'store/login/',
    isLoggedIn: 'rest-auth/logged-in/',
    user: 'rest-auth/user/',
    logOut: 'rest-auth/logout/',
    passwordChange: 'rest-auth/password/change/'
};

let _urlsByServer = _urls;

_urlsByServer = Object.fromEntries(Array.from(Object.entries(_urls)).map(value => [value[0], `${baseServerUrl}${value[1]}`]));
export const serverUrls = _urlsByServer;