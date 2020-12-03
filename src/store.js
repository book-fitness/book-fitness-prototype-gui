export default {
    mainMenuItems: {
        TASKS: 1,
        MY_BOOKS: 2,
        INTERESTING: 3,
        MY_TEAM: 4,
        RATE: 5,
        ABOUT: 6,
        MY_PROFILE: 7, 
        LOGIN: 8,    
        REGISTRATION: 9,  
        WRITE_ARTICLE: 10, 
        ARTICLE_CREATED: 11,
        ARTICLE_NOT_CREATED: 12,
    },
    axios: require('axios'),
    /*loginCookie: null,

    saveTolocalStorage() {
        localStorage.setItem("loginpass", this.loginToken);
    },
    getFomLocalStorage() {
        return localStorage.getItem("loginpass");
    },
    loginToken: null,*/
    setLoginToken(token) {
        localStorage.setItem("loginToken", token);
    },
    getLoginToken() {
        return localStorage.getItem("loginToken");
    },
    removeLoginToken() {
        localStorage.removeItem("loginToken");
    },
    hasLoginToken() {
        return "loginToken" in localStorage;
    }
}