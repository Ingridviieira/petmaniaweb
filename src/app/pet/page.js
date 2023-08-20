//pagina principal
import NavBar from "@/components/NavBar";

export default function Pet() {
    return (
    <>
        <NavBar active={"pet"} />

        <h1 style={{ fontSize: "120%", textAlign: "center" }}>
            Acompanhe seu Pet
        </h1>

        <main className=" bg-gray-400 m-20 p-12">
            <h2>Kira|Fêmea</h2>
        </main>
    </>

    )
}


// borderRadius: '90px',
//  background: '#F8F1F1',
//   boxShadow: '0px 4px 4px 0px
// rgba(0, 0, 0, 0.25)