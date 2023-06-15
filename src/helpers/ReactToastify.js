import { toast } from "react-toastify";

export const toastSuccess = (message) => toast.success(message, { pauseOnHover: false });

export const toastError = (message) => toast.error(message, { pauseOnHover: false })
