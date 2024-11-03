import { createContext,useCallback,useEffect,useState } from "react";
import { baseUrl, postRequest } from "../utils/services";
export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
const [user,setUser] = useState(null);
const [registerError,setRegisterError]= useState(null);
const [isRegisterLoading,setIsRegisterLoading]= useState(false);

const [registerInfo,setregisterInfo] = useState(
    {
        name: "",
        email: "",
        password:"",
    }
);


const [loginError,setLoginError]= useState(null);
const [isLoginLoading,setIsLoginLoading]= useState(false);
const [loginInfo,setLoginInfo] = useState(
    {
        email: "",
        password:"",
    }
);
//console.log("User :", user);
//console.log("Login Info:", loginInfo);
useEffect(()=>{
   const user = localStorage.getItem("User")

   setUser(JSON.parse(user))
},[])

//console.log("registerInfo: ",registerInfo);
const updatesetregisterInfo = useCallback((info)=>{
    setregisterInfo(info);
},[]);

const registerUser = useCallback(async(e)=>{
    e.preventDefault();
    setIsRegisterLoading(true)
    setRegisterError(null)
    const response = await postRequest(`${baseUrl}/users/register`,JSON.stringify(registerInfo))

    setIsRegisterLoading(false)
    if(response.error){
        return setRegisterError(response);
    }
    localStorage.setItem("User",JSON.stringify(response))
    setUser(response)
},[registerInfo]);

const updateLoginInfo = useCallback((info)=>{
    setLoginInfo(info);
},[]);
const loginUser = useCallback(async(e)=>{
    e.preventDefault();
    setIsLoginLoading(true)
    setLoginError(null)
    const response = await postRequest(`${baseUrl}/users/login`,JSON.stringify(loginInfo))

    setIsLoginLoading(false)

    if(response.error){
        return setLoginError(response);
    }

    localStorage.setItem("User",JSON.stringify(response));
    setUser(response)





},[loginInfo]);


const logoutUser = useCallback(async(e)=>{
    localStorage.removeItem("User");
    setUser(null)
}, [])

    return (<AuthContext.Provider  value={{
        user,
        registerInfo,
        updatesetregisterInfo,
        registerUser,
        registerError,
        isRegisterLoading,
        logoutUser,
        loginUser,
        updateLoginInfo,
        isLoginLoading,
        loginInfo,
        loginError,
        }}>
        
        {children}
    </AuthContext.Provider>);
};