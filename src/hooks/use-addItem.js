const getIndex = (list, item) => {
    return list.findIndex(element => element.id === item.id)
};

const useAddItem = (list, item) => {
    const updatedList = [...list];
    const itemIndex = getIndex(updatedList, item);
    const itemSet = { 
      id: item.id, 
      title: item.title, 
      description: item.description ? item.description : null,
      content: item.content ? item.content: null,
      date: item.date ? item.date: null
    };

    if(itemIndex >= 0) {
      updatedList[itemIndex] = itemSet;
    } else {
      updatedList.unshift(itemSet);
    }

    return updatedList;
    
  };

  export default useAddItem;