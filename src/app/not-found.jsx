import Button from "@/components/Button";

export default function NotFound(){
    return(
    <>
        <main className="flex flex-col items-center bg-slate-900 m-20 p-12">
            <h2>Ops! Página não encontrada</h2>
            <Button href="/">voltar para home</Button>
        </main>
    </>

    )
}