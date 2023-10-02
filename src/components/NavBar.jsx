"use client"

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Button from "./Button";

export default function NavBar({ active }) {
    const { user, logout } = useContext(AuthContext)
    const { push } = useRouter()

    function handleLogout(){
        logout()
        push("/login")
    }

    return (
        <nav className="flex justify-between items-center bg-gray-400 px-4 py-2"> {/* Trocando a cor do fundo para cinza */}
        <ul id="links" className="flex items-end gap-14 text-slate-950"> {/* Trocando a cor do texto para preto  */}
                <li>
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-slate-100">PetMania</h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="pet" && "text-slate-300"} href="/pet">
                    Pet
                    </Link>
                </li>
                
                <li>
                    <Link className={active=="gastos" && "text-slate-300"} href="/gastos">
                        Despezas
                    </Link>
                </li>
                
            </ul>

            <div className="flex items-center gap-2">
                <span>{user?.email}</span>
                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://i0.statig.com.br/bancodeimagens/bx/ry/fv/bxryfvt3vi76x0obfhixvrj8x.jpg" alt="avatar do usuário" />
                </div>
                <Button onClick={handleLogout} type="button">logout</Button>
            </div>
        </nav>
    )
}