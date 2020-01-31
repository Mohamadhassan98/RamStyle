export const serverUrls = {
    allCategories: '/store/categories/',
    allProducts: '/store/products/',
    signIn: '/store/login/',
    isLoggedIn: '/store/logged-in/',
    signUp: '/rest-auth/registration/',
    user: '/rest-auth/user/',
    logOut: '/rest-auth/logout/',
    passwordChange: '/rest-auth/password/change/',
    lastBasket: '/store/last-basket/',
    createBasket: '/store/last_basket/',
    basketProducts: (id = null) => `/store/basketproducts/${id ? `${id}/` : ''}`,
    searchProduct: (search, limit = null, offset = null) => `/store/products/?search=${search}${limit ? `&limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`,
    categoryProducts: (categoryId, limit = null, offset = null) => `/store/products/?category=${categoryId}${limit ? `&limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`,
    productDetails: (productId) => `/store/products/${productId}/`,
    productImages: (productId) => `/store/products/${productId}/images/`,
    productImage: (imageName) => `/media/product/${imageName}`,
    sellers: '/store/salesmans/',
    completedBaskets: '/store/baskets/',
    purchase: '/store/purchase/'
};