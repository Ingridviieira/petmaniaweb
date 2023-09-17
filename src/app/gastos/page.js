import { getGastos } from "@/actions/gastos";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { PlusIcon } from "@heroicons/react/24/outline";
import DataRow from "./DataRow";

export default async function Gastos() {
    const gastos = await getGastos()
    return (
    <>
        <NavBar active={"gastos"} />

        <main className="bg-slate-900 mt-10 p-9 rounded max-w-xl m-auto">
            <div className="flex justify-between items-center">
                <h2 className="text-slate-100 text-2xl">Gastos do animal</h2>
                <Button href="/gastos/new">
                    <PlusIcon className="h-6 w-6" />
                    Criar gasto
                </Button>
            </div>
            
            <div id="data">
                {gastos.map(gastos => <DataRow key={gastos.id} gastos={gastos} />)}
            </div>
        </main>
    </>
    )
}
