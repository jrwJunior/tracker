/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PositionsActionTypes } from './types';

// Interfaces async
export interface IPositionsRequestAction {
  type: PositionsActionTypes.GET;
  payload: any;
}

export interface IPositionUpdateAction {
  type: PositionsActionTypes.UPDATE;
  payload: any;
}

export interface IPositionCreateAction {
  type: PositionsActionTypes.CREATE;
  payload: any;
}

export interface IPositionDeleteAction {
  type: PositionsActionTypes.DELETE;
  payload: any;
}

// Interfaces sync
export interface IPositionsAddAction {
  type: PositionsActionTypes.ADD;
  payload: any;
}

export interface IPositionEditAction {
  type: PositionsActionTypes.EDIT;
  payload: any;
}

export interface IPositionAddNewAction {
  type: PositionsActionTypes.ADD_NEW;
  payload: any;
}

export interface IPositionErrorAction {
  type: PositionsActionTypes.ERROR;
  payload: any;
}

export interface IPositionClearErrorAction {
  type: PositionsActionTypes.CLEAR;
}

// Actions async
export const positionsAsync = (query?: string): IPositionsRequestAction => ({
  type: PositionsActionTypes.GET,
  payload: query,
});

export const createPositionAsync = (
  position: Array<{ name: string; id: number }>,
): IPositionCreateAction => ({
  type: PositionsActionTypes.CREATE,
  payload: position,
});

export const updatePostitionAsync = (
  position: Array<{ name: string; id: number }>,
): IPositionUpdateAction => ({
  type: PositionsActionTypes.UPDATE,
  payload: position,
});

export const deletePostitionAsync = (id: number): IPositionDeleteAction => ({
  type: PositionsActionTypes.DELETE,
  payload: id,
});

// Actions sync
export const setPositions = (positions: any): IPositionsAddAction => ({
  type: PositionsActionTypes.ADD,
  payload: positions,
});

export const setCreatePosition = (position: any): IPositionAddNewAction => ({
  type: PositionsActionTypes.ADD_NEW,
  payload: position,
});

export const setPosition = (position: any): IPositionEditAction => ({
  type: PositionsActionTypes.EDIT,
  payload: position,
});

export const setPositionsError = (error: string): IPositionErrorAction => ({
  type: PositionsActionTypes.ERROR,
  payload: error,
});

export const clearError = (): IPositionClearErrorAction => ({
  type: PositionsActionTypes.CLEAR,
});

export type PositionActions =
  | IPositionsRequestAction
  | IPositionUpdateAction
  | IPositionCreateAction
  | IPositionDeleteAction
  | IPositionsAddAction
  | IPositionEditAction
  | IPositionErrorAction
  | IPositionClearErrorAction
  | IPositionAddNewAction;
