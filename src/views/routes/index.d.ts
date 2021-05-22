interface RouteParams {
  path: string;
  exact: boolean;
  key: string;
  component: React.ElementType;
}

export interface Routes extends RouteParams {
  routes?: Array<RouteParams>;
}
