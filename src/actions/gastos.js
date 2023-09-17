"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/gastos"

export async function create(formData){
    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData) ),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201){
        const json = await resp.json()
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {message: `Erro ao cadastrar o gasto. ${errors}`}
    }

    revalidatePath("/gastos")
    return {success: "ok"}
}

export async function getGastos() {
    const resp = await fetch(url)
    return resp.json()
    }