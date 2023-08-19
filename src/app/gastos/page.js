//pagina para ver gastos
import NavBar from "@/components/NavBar";

export default function Gastos() {
    return (
    <>
        <NavBar active={"gastos"} />
        <h1 style={{ fontSize: "120%", textAlign: "center" }}>
            Gastos dos Pets
        </h1>

        <main className="bg-slate-900 m-20 p-12">
            <h2>Kira</h2>
        </main>
    </>


    )
}