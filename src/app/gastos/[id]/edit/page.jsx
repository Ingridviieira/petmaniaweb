import { getGastos } from "@/actions/gastos";
import NavBar from "@/components/NavBar";
import FormEdit from "./FormEdit";

export default async function GastosEdit({params}) {
    const gastos = await getGastos(params.id)
    
    return (
        <>
            <NavBar active="gastos" />
            <FormEdit gastos={gastos} />
        </>
    )
}
