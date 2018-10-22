import { combineReducers } from 'redux'

import catalogue from './storeMain';
import fav from './storeFav';
import shop from './storeShop'

const rootReducer = combineReducers({
  catalogue,
  fav,
  shop
})

export default rootReducer;