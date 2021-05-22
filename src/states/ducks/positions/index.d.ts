export interface IPositionsState {
  positions: Array<IResponsePositions>;
  loadingPos: boolean;
  errorPos: string | null;
  isSubmitted: boolean;
  totalPage: number;
}
