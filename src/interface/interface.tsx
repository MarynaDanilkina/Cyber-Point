import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store from 'reduxStore';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
