class AuthenticationService{

    registerSuccessfulLogin(username, password){
    
        sessionStorage.setItem('authenticateduser', username);
        console.log('registersucessfullogin')
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