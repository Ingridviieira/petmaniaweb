import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center bg-gray-400 px-4 py-2"> {/* Trocando a cor do fundo para cinza */}
        <ul id="links" className="flex items-end gap-14 text-slate-950"> {/* Trocando a cor do texto para preto  */}
                <li>
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-slate-100">PetMania</h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="pet" && "text-slate-300"} href="/pet">
                    Pet
                    </Link>
                </li>
                
                <li>
                    <Link className={active=="gastos" && "text-slate-300"} href="/gastos">
                        Despezas
                    </Link>
                </li>
                
                {/* <li>
                    <Link className={active=="adcAnimal" && "text-slate-300"} href="/adcAnimal">
                    Adicionar Animal
                    </Link>
                </li> */}
                
            </ul>

            {/* Foto do usuario  */}
            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://img.freepik.com/fotos-premium/close-up-do-macaco-mixedbreed-entre-o-chimpanze-e-o-bonobo-sorrindo_191971-22824.jpg?w=740" alt="avatar do usuário" />
            </div>
        </nav>
    )
}