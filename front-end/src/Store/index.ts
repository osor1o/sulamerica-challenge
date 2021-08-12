import { createStore, combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AuthReducer } from "@/Store/Reducers/Auth";
import { UserReducer } from "@/Store/Reducers/User";

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    whitelist: ["auth", "user"],
    storage,
  },
  rootReducer
);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
