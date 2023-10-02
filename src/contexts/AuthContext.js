"use client"

import { apiLogin, apiLogout } from "@/actions/user";
import { useRouter } from "next/navigation";

const { createContext, useState } = require("react");

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const { push } = useRouter()

    async function login(credenciais){
        const resp = await apiLogin(credenciais)

        if (resp?.error) return resp
        
        setUser({email: credenciais.email})
        push("/")
    }

    function logout(){
        setUser(null)
        apiLogout()
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}