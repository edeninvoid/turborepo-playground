import { PaginateApiResponse } from '@repo/shared/types/commonType';
import type { InfiniteData } from '@repo/shared/types/reactQueryTypes';
import { Skeleton } from '@repo/ui/components/_base/skeleton';

type PromotionArticleListProps<T> = {
  useDataHook: () => {
    data: InfiniteData<PaginateApiResponse<T>, unknown> | undefined;
    hasNextPage: boolean;
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;
  };
  // extractKey: (_item: T) => string | number;
  // articleData: (_item: T) => PromotionArticleData;
};

export default function PromotionArticleList<T>({
  useDataHook,
  // extractKey,
  // articleData,
}: PromotionArticleListProps<T>) {
  // const pageType = usePromotionContext();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useDataHook();
  const articleList = data?.pages?.flatMap(page => page.rows) ?? [];

  console.log(articleList);
  // if (!articleList.length) return <EmptyListState pageType={pageType} />;
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
  // <>
  //   <PromotionArticleGrid
  //     items={articleList}
  //     node={row => <PromotionArticle key={extractKey(row)} data={articleData(row)} />}
  //   />
  //   <PromotionSkeletonList isFetching={isFetchingNextPage} />
  //   {hasNextPage && (
  //     <LoadMore
  //       className={`mb-10 lg:mb-14`}
  //       responseSize="lg"
  //       callback={fetchNextPage}
  //       disabled={isFetchingNextPage}
  //     />
  //   )}
  // </>
}
