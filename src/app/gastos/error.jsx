"use client"

import Button from "@/components/Button"
import NavBar from "@/components/NavBar"

export default function Error({ error, reset }) {
    return (
        <>
            <NavBar active={"gastos"} />

            <main className="bg-slate-900 mt-10 p-9 rounded max-w-xl m-auto">
                <div className="flex flex-col gap-3 justify-between items-center">
                    <h2 className="text-slate-100 text-2xl">Ops! Um erro aconteceu</h2>
                    <p>{error.message}</p>
                    <div className="flex justify-around gap-3">
                        <Button variant="secondary" href="/">voltar para a home</Button>
                        <Button type="button" onClick={reset}>tentar novamente</Button>
                    </div>
                </div>
            </main>
        </>
    )
}