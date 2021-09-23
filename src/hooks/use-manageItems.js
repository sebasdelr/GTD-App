import { useState } from 'react';

const notes = [
    {
      id: 'a1',
      title: 'Meeting',
      content: 'Have a meeting with shareholders about what is next',
      date: new Date(2020, 7, 14),
      type: ''
    },
    {
      id: 'a2',
      title: 'Phone Call',
      content: 'Call Mark about new designs for living room',
      date: new Date(2021, 2, 28),
      type: '4'
    },
    {
      id: 'a3',
      title: 'Groceries',
      content: 'Remember to buy milk',
      date: new Date(2021, 5, 12),
      type: ''
    },
  ];

const useManageItems = () => {
    const [getItems, setGetItems] = useItems(notes);

    return(getItems);

}

export default useManageItems;