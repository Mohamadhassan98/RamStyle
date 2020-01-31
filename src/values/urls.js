import {strings} from "./strings";

export const baseUrls = {
    home: '/',
    auth: '/auth',
    profile: '/profile',
    categories: (id) => `/categories/${id}`,
    search: (query) => `/search/${query}`,
    cart: '/cart',
    error500: '/500'
};

export const profileUrls = {
    profile: '/',
    mySales: '/my-sales',
    changePassword: '/change-password'
};

export const routeUrls = {
    home: baseUrls.home,
    category: `/${baseUrls.categories.name}/:id`,
    search: `/${baseUrls.search.name}/:query`,
    auth: baseUrls.auth,
    profile: baseUrls.profile,
    mySales: `${baseUrls.profile}${profileUrls.mySales}`,
    changePassword: `${baseUrls.profile}${profileUrls.changePassword}`,
    cart: baseUrls.cart,
    error500: `${baseUrls.error500}`
};

export const pageTitles = {
    home: `${strings.appName}`,
    basket: `${strings.basket}`,
    auth: `${strings.auth}`,
    productDetail: `${strings.productDetail}`,
    PurchaseReport: `${strings.PurchaseReport}`,
    products: `${strings.products}`,
    bankPort: `${strings.bankPort}`,
    aboutUs: `${strings.aboutUs}`,
    aboutProject: `${strings.aboutProject}`,
    changePassword: `${strings.changePassword}`,
    mySale: `${strings.mySale}`,
    profile: `${strings.profile}`,
};