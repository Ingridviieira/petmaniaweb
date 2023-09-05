import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getGastos(){
    const url = "http://localhost:8080/api/v1/gastos"
    const resp = await fetch(url, { next: { revalidate: 0 } })
    return resp.json()
}

export default async function Gastos() {
    const gastos = await getGastos()
    return (
    <>
        <NavBar active={"gastos"} />
        <main className="bg-slate-900 mt-10 p-9 rounded max-w-xl m-auto">
        <h2 className="text-slate-100 text-2xl">Gastos do animal</h2>
        <div id="data">
            {gastos.map(gastos => <DataRow key={gastos.id} gastos={gastos} />)}
        </div>
        </main>
    </>


    )
}
