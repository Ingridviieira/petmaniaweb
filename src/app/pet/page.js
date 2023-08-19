//pagina principal
import NavBar from "@/components/NavBar";

export default function Pet() {
    return (
    <>
        <NavBar active={"pet"} />

        <h1 style={{ fontSize: "120%", textAlign: "center" }}>
            Acompanhe seu Pet
        </h1>

        <main className="bg-slate-900 m-20 p-12">
            <h2>Kira|Fêmea</h2>
        </main>
    </>

    )
}