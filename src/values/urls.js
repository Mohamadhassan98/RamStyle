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
    categoryRoute: `${baseUrls.categories}/:id`
};