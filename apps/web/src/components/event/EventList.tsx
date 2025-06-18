'use client';

import { useEventListHandlers } from '@repo/shared/hooks/useEvent';
import PromotionArticleList from '@repo/ui/components/promotion/common/PromotionArticleList';
import { Suspense } from 'react';

export default function EventList() {
  return (
    <Suspense>
      <PromotionArticleList useDataHook={useEventListHandlers} />
    </Suspense>
  );
}
