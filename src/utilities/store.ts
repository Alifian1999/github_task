import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import repositories from '../pages/main_page/getListRepositoriesSlice';

export const store = configureStore({
    reducer: {
        list_repositories : repositories
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
