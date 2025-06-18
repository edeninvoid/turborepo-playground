import { BoardConfig, EventReply, Inquiry } from '@repo/shared/types/boardType';

export interface EventViewApiResponse {
  board_config: BoardConfig;
  // headers: SeoData
  order_info: any[];
  replies: EventReply[];
  row: Inquiry;
  uploadFiles: any[];
}
