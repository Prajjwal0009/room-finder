import { useQuery, useQueryClient } from 'react-query';
import { getApiData } from '../helpers/AxiosInstance';

const useGetHook = (queryKey: any, url: string, params: null) => {
  const queryClient = useQueryClient();

  const { isLoading, data, isSuccess } = useQuery(
    queryKey,
    async () => {
      const response = await getApiData(url, params);
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return { isLoading, data, isSuccess };
};

export default useGetHook;
