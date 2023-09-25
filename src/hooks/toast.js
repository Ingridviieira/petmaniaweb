import toast from "react-hot-toast";

export default function useToast() {
    const config = {
        style: {
            borderRadius: '4px',
            background: '#333',
            color: '#fff',
        },
    }

    const error = message => toast.error(message, config)
    const success = message => toast.success(message,config)

    return { error, success }

}