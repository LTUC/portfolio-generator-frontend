import { createContext, useState, useContext } from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";

const createUserUrl = "https://portfolio-generator-401d09.herokuapp.com/api/v1/user/";
const loginURL = "https://portfolio-generator-401d09.herokuapp.com/api/token/"
const refreshUrl = "https://portfolio-generator-401d09.herokuapp.com/api/token/refresh/"

const AuthContext = createContext();

export function useAuth() {
    const Auth = useContext(AuthContext);
    if (!Auth) throw new Error("Check your AuthProvider in you _app.js, maybe")
    return Auth;
}

// add my logic
// check the local storage in "AuthTokens"
// if it is empty, then the user is not logged in => tokens = null
// else: tokens = tokens stored in the ls

export function AuthProvider({ childern }) {
    let lsData = null
    // if (typeof window !== 'undefined') {
    //     lsData = localStorage.getItem("AuthTokens");
    // }

    const [tokens, setTokens] = useState(() => {
        lsData ? JSON.parse(lsData) : null
    });
    const [userInfo, setUserInfo] = useState(() => {
        lsData ? jwt_decode(lsData) : null
    });

    async function signup(userInput) {
        try {

            const res = await axios.post(createUserUrl, userInput);
            if (res.status === 400) {
                console.log(`${res.status} bad request`)
            }
            if (res.status === 201 || res.status === 200) {
                login(email, password);
            }
        }
        catch (error) {
            console.log(` Error Signing in: ${error}`)
        }

    }

    async function login(email, password) {
        try {
            const res = await axios.post(loginURL, { email, password });
            if (res.status === 200) {
                setTokens(res.data);
                setUserInfo(jwt_decode(res.data.access));
                // save the tokens to the ls:
                localStorage.setItem("AuthTokens", JSON.stringify(res.data))
            }
        }
        catch (error) {
            console.log(`Error Logging in: ${error}`)
        }
    }

    async function refreshToken() {
        const body = {
            refresh: tokens.refresh
        }
        const res = await axios.post(refreshUrl, body);
        if (res.status === 200) {
            newTokens = {
                access: res.data,
                refresh: tokens.refresh
            }
            setTokens(newTokens)
            localStorage.setItem("AuthTokens", JSON.stringify(newTokens));
        } else {
            logout();
        }
    }

    function logout() {
        setTokens(null);
        setUserInfo(null);
        localStorage.removeItem("AuthTokens")
    }

    const globalState = {
        tokens,
        signup,
        login,
        logout,
        refreshToken,
    }
    // function to check if access token has expired

    return (
        <AuthContext.Provider value={globalState}>
            {childern}
        </AuthContext.Provider>
    )
}

// a function to sign up
// a function to login
// a function to refresh the token
// tokens