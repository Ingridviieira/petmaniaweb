import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className=" m-20 p-12"  style={{ borderRadius: '90px', background: '#F8F1F1', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
        <h2>Home</h2>
      </main>
    </>
  )
}

// style-- para a caixa
// borderRadius: '90px',
//  background: '#F8F1F1',
//   boxShadow: '0px 4px 4px 0px
// rgba(0, 0, 0, 0.25)