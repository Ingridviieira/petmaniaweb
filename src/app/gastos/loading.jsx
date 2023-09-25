import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import { Skeleton } from "@/components/ui/skeleton";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Loading() {
    const gastos = Array(3).fill({})
    return (
        <>
            <NavBar active={"gastos"} />

            <main className="bg-slate-900 mt-10 p-9 rounded max-w-xl m-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-slate-100 text-2xl">Gastos</h2>
                    <Button href="/gastos/new">
                        <PlusIcon className="h-6 w-6" />
                        criar gasto
                    </Button>
                </div>

                <div id="data">
                    {gastos.map(() => {
                        return (
                            <div id="data-row" className="group flex items-center justify-between p-2 my-2 rounded cursor-pointer hover:bg-slate-700">
                                <div className="flex gap-2 items-center">
                                    <Skeleton className="h-6 w-6 bg-slate-600 rounded-full" />
                                    <Skeleton className="h-6 w-32 bg-slate-600" />
                                </div>
                                <div className="flex items-center">
                                    <Skeleton className="h-6 w-10 bg-slate-600" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}