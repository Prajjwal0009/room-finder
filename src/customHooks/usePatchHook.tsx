import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchApiData } from "../helpers/AxiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const usePatchHook = ( queryKey:any, navigateURL:any ) => {
  const queryClient: any = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutateAsync, isSuccess, data, isError } = useMutation(
    patchApiData,
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          console.log(data, "data");
          toast.success("Updated successfully");
          if (navigateURL) {
            navigate(navigateURL);
          }
        } else {
          toast.error("Some things went wrongs");
        }
      },
      onError: (error) => {
        toast.error("Some things went wrongs");
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKey ?? null);
      },
    }
  );
  return {
    isLoading,
    mutateAsync,
    isSuccess,
    data,
    isError,
  };
};

export default usePatchHook;
