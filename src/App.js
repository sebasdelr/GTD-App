import './App.css';
import Items from './components/Items';
import NoteContent from './components/NoteContent';


const App = () => {

  const notes = [
    {
      id: 'a1',
      title: 'Meeting',
      content: 'Have a meeting with shareholders about what is next',
      date: new Date(2020, 7, 14),
    },
    {
      id: 'a2',
      title: 'Phone Call',
      content: 'Call Mark about new designs for living room',
      date: new Date(2021, 2, 28),
    },
    {
      id: 'a3',
      title: 'Groceries',
      content: 'Remember to buy milk',
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      
      <Items list={notes} />
      
      <NoteContent />
      
    </div>
  );
}
export default App;
