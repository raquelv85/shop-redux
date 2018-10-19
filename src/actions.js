import {
  ADD_PRODUCTO,
  SAVE_SHOP,
  SAVE_FAV,
  DELETE_SHOP,
  DELETE_FAV,
  DELETE,
  ADD_UNIDAD,
  DELETE_UNIDAD,
} from './constants';

export function addProducto(producto) {
  return {
    type: ADD_PRODUCTO,
    producto
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

export function addUnidades(unidad) {
  console.log("unidades ", unidad)
  return {
    type: ADD_UNIDAD,
    unidad
  };
}

export function deleteUnidades(unidad) {
  console.log("unidades",unidad)
  return {
    type: DELETE_UNIDAD,
    unidad
  };
}

