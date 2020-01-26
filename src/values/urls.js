import {strings} from "./strings";

export const baseUrls = {
    home: '/',
    auth: '/auth',
    profile: '/profile',
    categories: (id) => `/categories/${id}`,
};

export const profileUrls = {
    profile: '/',
    mySales: '/my-sales',
    changePassword: '/change-password'
};

export const routeUrls = {
    home: baseUrls.home,
    categoryRoute: `/${baseUrls.categories.name}/:id`,
    auth: baseUrls.auth,
    profile: baseUrls.profile,
    mySales: `${baseUrls.profile}${profileUrls.mySales}`,
    changePassword: `${baseUrls.profile}${profileUrls.changePassword}`
};

export const pageTitles = {
    home: `${strings.appName}`
};