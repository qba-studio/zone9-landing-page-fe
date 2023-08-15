import { createReducer } from '@reduxjs/toolkit';
import { UserDataResponse } from 'myria-core-sdk/dist/types';
import { setMyriaUser } from './actions';

export interface UserState {
  walletAddress?: string;
  myriaUser?: UserDataResponse;
}

const initialState: UserState = {};

export default createReducer<UserState>(initialState, (builder) =>
  builder.addCase(setMyriaUser, (state, { payload }) => {
    state.myriaUser = payload;
  })
);
