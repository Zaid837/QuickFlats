import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import ThemeReducer from './theme/theme.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

const rootReducer = combineReducers({
  user: userReducer,
  theme: ThemeReducer,
});

export default persistReducer(persistConfig, rootReducer);
