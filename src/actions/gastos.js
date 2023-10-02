"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const url = process.env.NEXT_PUBLIC_BASE_URL + "/gastos";

export async function create(formData) {
    const token = cookies().get('pet_token');
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json",
        },
    };

    const tokenValue = token ? token.value : ''; // Verifica se token é definido e obtém seu valor

    if (tokenValue) {
        options.headers.Authorization = `Bearer ${tokenValue}`;
    }

    const resp = await fetch(url, options);

    if (resp.status !== 201) {
        const json = await resp.json();
        const errors = json.reduce((str, error) => str += error.message + ". ", "");
        return { message: `Erro ao cadastrar gasto. ${errors}` };
    }

    revalidatePath("/gastos");
    return { success: "ok" };
}

export async function getGastos() {
    const token = cookies().get('gastostoken');
    const options = {};

    const tokenValue = token ? token.value : ''; // Verifica se token é definido e obtém seu valor

    if (tokenValue) {
        options.headers = {
            "Authorization": `Bearer ${tokenValue}`,
        };
    }

    const resp = await fetch(url, options);
    if (resp.status !== 200)
        console.log(resp);
    return resp.json();
}

export async function destroy(id) {
    const urlDelete = url + "/" + id;
    const options = {
        method: "DELETE",
    };

    const resp = await fetch(urlDelete, options);
    if (resp.status !== 204)
        return { error: "Erro ao apagar a gasto. " + resp.status };
    revalidatePath("/gastos");
}

export async function getGastosById(id) {
    const getUrl = url + "/" + id;
    const resp = await fetch(getUrl);
    if (resp.status !== 200)
        return { error: "Erro ao buscar dados da gasto" };
    return await resp.json();
}

    export async function update(gastos) {
    const updateUrl = url + "/" + gastos.id;
    const options = {
        method: "PUT",
        body: JSON.stringify(gastos),
        headers: {
        "Content-Type": "application/json",
        },
    };

    const resp = await fetch(updateUrl, options);

    if (resp.status !== 200)
        return { error: "erro ao atualizar gasto" };

    revalidatePath("/gastos");
}
