const zwnj = '‌';

const appName = 'رم استایل';

const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export const strings = {
    appName: appName,
    toolbarSearchLabel: 'جستجو...',
    brandsTitle: 'برندها',
    productCategories: `دسته${zwnj}بندی محصولات`,
    mySales: 'خریدهای من',
    profile: 'پروفایل',
    changePassword: 'تغییر کلمه عبور',
    logout: 'خروج',
    oldPassword: 'کلمه عبور فعلی',
    newPassword: 'کلمه عبور جدید',
    confirmPassword: 'تکرار کلمه عبور',
    saveChanges: 'ثبت تغییرات',
    name: 'نام',
    lastName: 'نام خانوادگی',
    email: 'ایمیل',
    username: 'نام کاربری',
    applicationsTitle: `${appName} همیشه همراه شما`,
    applicationsBody: `با نصب اپلیکیشن ${appName} بر روی گوشی همراه خود، جدیدترین اخبار را دریافت کنید و از هیچ تخفیفی بی اطلاع نمانید.`,
    show: 'نمایش',
    product: 'محصول',
    from: 'از',
    password: 'کلمه عبور',
    rememberMe: 'مرا به خاطرت نگه دار',
    signIn: 'ورود',
    signUp: 'ثبت نام',
    passwordHelper: `حداقل ${persianNumbers[8]} کاراکتر شامل یک حرف`,
    saleHelp: `راهنمای خرید از ${appName}`,
    orderRegisterHelp: 'نحوه ثبت سفارش',
    sendOrderProcedure: 'رویه ارسال سفارش',
    paymentMethods: `شیوه${zwnj}های پرداخت`,
    customerServices: 'خدمات مشتریان',
    faq: `پاسخ به پرسش${zwnj}های متداول`,
    productReturnProcedure: 'رویه بازگرداندن کالا',
    termsOfUse: 'شرایط استفاده',
    privacy: 'حریم خصوصی',
    reportBug: 'گزارش اشکال',
    withUs: `با ${appName}`,
    appForum: `اتاق خبر ${appName}`,
    saleWithUs: `فروش در ${appName}`,
    contactUs: `تماس با ${appName}`,
    aboutUs: 'درباره ما',
    jobOpportunities: `فرصت${zwnj}های شغلی`,
    followUs: `${appName} را در شبکه${zwnj}های اجتماعی دنبال کنید.`,
    emptyUsernameError: `نام کاربری نمی${zwnj}تواند خالی باشد.`,
    confirmPasswordNotMatch: 'کلمه عبور تطابق ندارد.',
    invalidEmail: 'ایمیل وارد شده صحیح نیست.',
    usernameAlreadyExists: 'نام کاربری از قبل وجود دارد.',
    emailAlreadyExists: 'ایمیل از قبل وجود دارد.',
    commonPasswordError: 'کلمه عبور بیش از حد ساده است.'
};

export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegex = /(?=[\w\s]*[A-Za-z][\w\s]*)[\w\s]{8,}/;