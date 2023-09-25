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

export async function destroy(id){

    const urlDelete = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(urlDelete, options)

    if (resp.status !== 204)
        return {error: "Erro ao apagar gasto. " + resp.status}

    revalidatePath("/gastos")
}

export async function getGasto(id){ // Renomeada de getGastos para getGasto
    const getUrl = url + "/" + id

    const resp = await fetch(getUrl)

    if(resp.status !== 200)
        return {error: "Erro ao buscar dados gastos"}

    return await resp.json()
}

export async function update(gastos){
    const updateUrl = url + "/" + gastos.id

    const options = {
        method: "PUT",
        body: JSON.stringify( gastos ),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateUrl, options)

    if(resp.status !== 200)
        return {error: "erro ao atualizar gasto"}

    revalidatePath("/gastos")
}
