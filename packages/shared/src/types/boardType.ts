export interface BoardConfig {
  board_id: string;
  board_name: string;
  board_type: string;
  is_auto_secret: number;
  is_secret: number;
  is_reply: number;
}

export interface CommonInquiryInfo {
  banner: string;
  post_id: number;
  board_category_id: number;
  board_category_name: string;
  brand_name: string;
  company_domain: string;
  company_name: string;
  content: string;
  created_at: string;
  dept: string;
  display_end_at?: string;
  display_start_at?: string;
  subject: string;
  hits: number;
  inquiry_type_name: string;
  is_admin: number;
  is_aligo: number;
  is_best: number;
  is_email: number;
  is_new: number;
  is_reorder: number;
  is_secret: number;
  is_writer: number;
  member_id: number;
  member_grade: string;
  user_id: string;
  user_name: string;
  nick_name: string;
  writer_ip: string;
  writer_name: string;
  email: string;
  phone: string;
  updated_at: string;
  reply_status: string;
  review_score: number;
  admin_id: number;
  order_id: number;
  order_number: string;
  order_options: any;
  plan_id: number;
  reject_reason: string;
  sell_price: string;
  staff_count: number;
  product_id: number;
  product_name: string;
  thumb_image: string;
  product_thumb_image: string;
  product_image: string;
  product_review_score_avg: number;
  product_review_score_count: number;
  is_display: number;
  display_user_name: string;
  link: string;
  type: string;
}

export interface Reply {
  id: number; // ($uint32)
  post_id: number; //($uint32)
  content: string; //maxLength: 255
  created_at: string; //등록일
  display_user_name: string; //작성자 이름
  is_writer: 0 | 1; // 작성자 여부
  is_admin: 0 | 1; // 어드민 작성자
}

export interface EventReply extends Reply {
  admin_comment: { created_at: string | null; value: string | null };
  is_like: 0 | 1;
  is_secret: 0 | 1;
  likes: number;
  writer_name: string;
}

export interface UploadFiles {
  id: number; // ($uint32)파일 아이디
  post_id: number; // ($uint32)게시글 아이디
  type: string; //파일 종류 IMAGE, MOVIE
  path: string; //원본 파일 경로
  thumbnail: string; //동영상 썸네일 파일 경로
}

export interface Inquiry extends CommonInquiryInfo {
  replies: Reply[];
  upload_files: UploadFiles[];
}
