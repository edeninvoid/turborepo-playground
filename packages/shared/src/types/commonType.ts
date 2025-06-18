export interface Paginate {
  current_page: number;
  data: any[];
  last_page: number;
  links: any[];
  path: string;
  per_page: number;
  total: number;
}

export interface ApiHeaders {
  title: string;
  author: string;
  desc: string;
  keyword: string;
  favicon: string;
  brand_id: string;
  og: {
    url: string;
    type: string;
    title: string;
    image: string;
    image_width: string;
    image_height: string;
    image_desc: string;
    locale: string;
  };
  verification: { facebook: string; google: string; naver: string };
  ld_json: {
    '@context': string;
    '@type': string;
    name: string;
    legalName: string;
    url: string;
    founder: any[];
    address: any[];
    contactPoint: any[];
    sameAs: any[];
  };
  header_js: string[];
}

export interface PaginateApiResponse<T> {
  paginate: Paginate;
  rows: T[];
  headers?: ApiHeaders;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
