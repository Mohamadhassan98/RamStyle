// const baseServerUrl = '/';
//
// const _urls = {
export const serverUrls = {
    allCategories: '/store/categories/',
    allProducts: '/store/products/',
    signIn: '/store/login/',
    isLoggedIn: '/store/logged-in/',
    signUp: '/rest-auth/registration/',
    user: '/rest-auth/user/',
    logOut: '/rest-auth/logout/',
    passwordChange: '/rest-auth/password/change/',
    lastBasket: '/store/last_basket/',
    searchProduct: (search) => `/store/products/?search=${search}/`,
    categoryProducts: (categoryId) => `/store/products/?category=${categoryId}`,
    productDetails: (productId) => `/store/products/${productId}/`,
    productImages: (productId) => `/store/products/${productId}/images/`,
    productImage: (imageName) => `/media/product/${imageName}`,
    sellers: '/store/salesmans/',
    completedBaskets: '/store/baskets/'
};

// let _urlsByServer = _urls;
//
// _urlsByServer = Object.fromEntries(Array.from(Object.entries(_urls)).map(value => [value[0], `${baseServerUrl}${value[1]}`]));
// export const serverUrls = _urlsByServer;