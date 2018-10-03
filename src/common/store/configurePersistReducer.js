import { persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import collections from 'common/utils/themes';
import gstyles from 'common/utils/gstyles';

const transform = createTransform(
  (inboundState, key) => {
    return inboundState;
  },
  (outboundState, key) => {
    switch (key) {
      case 'settings':
        return Object.assign({}, outboundState, {
          theme: collections[outboundState.light_theme.id],
          dark_theme: collections[outboundState.dark_theme.id],
          light_theme: collections[outboundState.light_theme.id],
          gstyles: gstyles(collections[outboundState.light_theme.id]),
          dark_gstyles: gstyles(collections[outboundState.dark_theme.id]),
          light_gstyles: gstyles(collections[outboundState.light_theme.id]),
        });
      default:
        return outboundState;
    }
  },
);
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings'],
  transforms: [transform],
};

export default rootReducer => {
  return persistReducer(persistConfig, rootReducer);
}
