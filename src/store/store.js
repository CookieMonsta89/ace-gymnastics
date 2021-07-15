import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import reducer from "../store/reducers/index";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { devToolsEnhancer } from "redux-devtools-extension";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
	key: "root",
	storage,
	stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, reducer);
const store = createStore(pReducer, devToolsEnhancer());
const persistor = persistStore(store);

export { store, persistor };
