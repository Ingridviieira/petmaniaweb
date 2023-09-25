"use client"
import { update } from "@/actions/gastos";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { CheckIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { redirect } from 'next/navigation';
import { useState } from "react";

export default function FormEdit({gastos}) {
    const [error, setError] = useState("")
    const [gastosEdit, setGastosEdit] = useState(gastos)

    async function handleSubmit() {
        const resp = await update(gastosEdit)

        if (resp?.error) {
            setError(resp.error)
            return
        }

        redirect("/gastos")

    }

    function handleFieldEdit(field, value){
        setGastosEdit({
            ...gastosEdit,
            [field]: value
        })

    }


    return (
        <main className="bg-slate-900 mt-20 m-auto p-12 rounded max-w-lg">
            <h2 className="text-2xl text-slate-100">Editar Gasto</h2>

            <form action={handleSubmit} className="flex flex-col gap-4">
                <InputText
                    label="nome"
                    id="nome"
                    name="nome"
                    value={gastosEdit.nome}
                    onChange={(e) => handleFieldEdit("nome", e.target.value)}
                />

                <InputText
                    label="ícone"
                    id="icone"
                    name="icone"
                    value={gastosEdit.icone}
                    onChange={(e) => handleFieldEdit("icone", e.target.value)}
                />

                <div className="flex justify-around">
                    <Button href="/gastos" variant="secondary">
                        <ChevronLeftIcon className="h-6 w-6 " />
                        cancelar
                    </Button>
                    <Button type="button">
                        <CheckIcon className="h-6 w-6" />
                        salvar
                    </Button>
                </div>

                <span className="text-red-500">{error}</span>

            </form>

        </main>
    )
}