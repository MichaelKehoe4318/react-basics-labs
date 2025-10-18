import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
       <Task title="Dishes" deadline="Today" description="Wash, dry, and stack dishes" />
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away" />
      <Task title="Tidy" deadline="Day after tomorrow" description="Organize desk and living room" />
    </div>
  );
}

export default App;
