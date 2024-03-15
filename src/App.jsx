import './App.css'
import ExpensesList from './components/ExpensesList';
import Input from "./components/Input";

function App() {

  return (
    <>
      <h1>Gestionnaire de dépenses</h1>
      <Input />
      <ExpensesList />
    </>
  )
}

export default App
