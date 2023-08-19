//pagina principal
import NavBar from "@/components/NavBar";

export default function Pet() {
    return (
    <>
        <NavBar active={"pet"} />

        <main className="bg-slate-900 m-20 p-12">
            <h2>Acompanhe seu Pet</h2>
        </main>
    </>

    )
}