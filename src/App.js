import './App.css';
import Balance from './components/Balance';
import { Header } from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <IncomeExpenses />
    </div>
  );
}

export default App;
