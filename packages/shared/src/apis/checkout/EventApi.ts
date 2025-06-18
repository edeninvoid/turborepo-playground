import { EventViewApiResponse } from '@repo/shared/apis/checkout/EventApiType';
import { getAxiosInstance } from '@repo/shared/lib/axiosinstance';
import { Inquiry } from '@repo/shared/types/boardType';
import { PaginateApiResponse } from '@repo/shared/types/commonType';
import { AxiosInstance } from 'axios';

export const createEventApi = (axios: AxiosInstance) => ({
  async getEventListApi({
    page = 1,
    limit = 6,
    state = 'ONGOING',
  }): Promise<PaginateApiResponse<Inquiry>> {
    const { data } = await axios.get('/api/boards/board/event', {
      params: {
        page: page,
        limit: limit,
        event_state: state,
      },
    });
    return data ?? {};
  },
  async getEventViewApi(postId: string, sessionId?: string): Promise<EventViewApiResponse> {
    const { data } = await axios.get(`/api/boards/board/event/view/${postId}?reply_sort=NEWDESC`, {
      headers: {
        'client-session-id': sessionId,
      },
    });
    return data ?? {};
  },
});

export const getEventApi = () => createEventApi(getAxiosInstance());
