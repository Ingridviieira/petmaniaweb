import DropMenu from "@/components/DropMenu";
import { BanknotesIcon } from '@heroicons/react/24/outline';

export default function DataRow({gastos}) {
    return (
        <div id="data-row" className="group flex items-center justify-between p-2 my-2 rounded cursor-pointer hover:bg-slate-700">
            <div className="flex gap-2 items-center">
                <BanknotesIcon className="h-6 w-6" />
                <span>{gastos.nome}</span>
            </div>
            <div className="flex items-center">
                <span>R$ 50.00</span>
                <div className="invisible group-hover:visible">
                    <DropMenu />
                </div>
            </div>
        </div>
    )
}