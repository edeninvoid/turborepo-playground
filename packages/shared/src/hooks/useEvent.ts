import { getEventApi } from '@repo/shared/apis/checkout/EventApi';
import { QUERY_KEYS } from '@repo/shared/constants/queryKey';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

export const useEventListHandlers = () => {
  const eventApi = getEventApi();
  return useSuspenseInfiniteQuery({
    queryKey: QUERY_KEYS.EVENT_LIST('ONGOING'),
    queryFn: async ({ pageParam }) => eventApi.getEventListApi({ page: pageParam }),
    getNextPageParam: res => {
      return res.paginate.current_page + 1 <= res.paginate.last_page
        ? res.paginate.current_page + 1
        : undefined;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
