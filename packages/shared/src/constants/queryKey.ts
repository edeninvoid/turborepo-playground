export const QUERY_KEYS = {
  EVENT_LIST: (tabName: 'ONGOING' | 'COMPLETE') => ['EVENT_LIST', tabName],
  EVENT_VIEW: (eventId: string) => ['EVENT_VIEW', eventId],
  PLAN_LIST: ['PLAN_LIST'],
  PLAN_VIEW: (planId: string) => ['PLAN_VIEW', planId],
  PLAN_PROD_LIST: (planGroupId: string) => ['PLAN_PROD_LIST', planGroupId],
  CART_COUNT: ['CART_COUNT'],
  CART_LIST: ['CART_LIST'],
  ORDER_PURCHASE: ['ORDER_PURCHASE'],
  CODE_CONFIG: (type: string) => ['CODE_CONFIG', type],
};
