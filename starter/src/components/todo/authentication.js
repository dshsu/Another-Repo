class AuthenticationService{
    registerSuccessfulLogin(username, password){
    console.log('registersucessfullogin')
        sessionStorage.setItem('authenticateduser', username);
    }
    logout(){
        sessionStorage.removeItem('authenticateduser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if (user===null) return false;
        return true;
    }
}

export default new AuthenticationService()