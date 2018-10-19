
export function deleteItems(id, list){

  list.map((item, index) =>{
    if(item.id === id){
      list.splice(index, 1)
    }
  });

  return list;
}

