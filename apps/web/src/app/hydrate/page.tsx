import EventList from '@/components/event/EventList';
import { apiFactory } from '@/lib/api.server';
import { QUERY_KEYS } from '@repo/shared/constants/queryKey';
import { PrefetchInfiniteQuery } from '@repo/shared/react-query/PrefetchInfiniteQuery';
import { Metadata, ResolvingMetadata } from 'next';

export default async function HydratePage() {
  return (
    <PrefetchInfiniteQuery
      queryKey={QUERY_KEYS.EVENT_LIST('ONGOING')}
      queryFn={({ pageParam }) => apiFactory.event.getEventListApi({ page: pageParam })}
      getNextPageParam={response => {
        const { current_page, last_page } = response.paginate;
        return current_page < last_page ? current_page + 1 : undefined;
      }}
    >
      <EventList />
    </PrefetchInfiniteQuery>
  );
}

export async function generateMetadata(_: any, parent: ResolvingMetadata): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: 'Hydration Test Page',
    description: 'tanstack/react-query',
    openGraph: {
      title: 'Hydration Test Page',
      images: [...previousImages],
    },
  };
}
