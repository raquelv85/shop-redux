import {
  ADD_PRODUCT,
  SAVE_SHOP,
  SAVE_FAV,
  DELETE_SHOP,
  DELETE_FAV,
  DELETE,
  ADD_UNITY,
  DELETE_UNITY,
} from './constants';

export function addProduct(product) {
  return {
    type: ADD_PRODUCT,
    product
  };
}

export function saveShop(shop) {
  return {
    type: SAVE_SHOP,
    shop
  };
}

export function saveFav(fav) {
  return {
    type: SAVE_FAV,
    fav
  };
}

export function deleteShop(item) {

  return {
    type: DELETE_SHOP,
    item
  };
}

export function deleteFav(item) {
  return {
    type: DELETE_FAV,
    item
  };
}

export function deleteList(item) {
  return {
    type: DELETE,
    item
  };
}

export function addUnity(unity) {
  return {
    type: ADD_UNITY,
    unity
  };
}

export function deleteUnits(unity) {
  return {
    type: DELETE_UNITY,
    unity
  };
}

