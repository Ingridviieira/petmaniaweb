
export default function InputText({label, id, name, register=()=>{}, ...props}){
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <input {...register(name)} type="text" id={id} {...props} className="bg-slate-800 rounded py-1 px-2 outline-none focus:ring-1 focus:ring-pink-600 " />
        </div>
    )
}