import { useState } from "react";
import { useExpenseContext } from "../utils/expenseContext";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = () => {
    const { state, categories } = useExpenseContext();
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredExpenses = state.expenses.filter(expense =>
        selectedCategory ? expense.category === selectedCategory : true
    );

    return (
        <div className={'list-container'}>
            <select className={'filter-btn'} value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Toute catégories</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Montant</th>
                        <th>Catégorie</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpenses.map((expense, index) => (
                        <ExpenseItem key={index} expense={expense} />
                    ))}
                    {filteredExpenses.length === 0 
                        && <tr><td className={'full-col'} colSpan={4}>Aucune dépense</td></tr>}
                    {filteredExpenses.length !== 0 
                        && <tr><td className={'full-col'} colSpan={4}>Total: {filteredExpenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0)}€</td></tr>}
                </tbody>
            </table>
        </div>
    )
}

export default ExpensesList