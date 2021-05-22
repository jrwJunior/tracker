/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRequestUsers {
  position?: string;
  query?: string;
  role?: string;
  status?: string;
}

export interface IResponseUsers {
  content: Array<any>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberofelements: number;
  pageable: {
    offset: number;
    paged: boolean;
    pagenumber: number;
    pagesize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalelements: number;
  totalpages: number;
}

export interface IUsersState {
  users: Array<any>;
  userPos: Array<any>;
  filtered: boolean;
  totalPage: number;
  loading: boolean;
  error: string | null;
}
