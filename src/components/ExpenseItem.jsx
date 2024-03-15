import { useExpenseContext } from "../utils/expenseContext";
import './ExpenseItem.css';


const ExpenseItem = ({expense}) => {
    const { dispatch } = useExpenseContext();
    return (
        <tr>
            <td>{expense.title}</td>
            <td>{expense.amount}€</td>
            <td>{expense.category}</td>
            <td>
                <button className={'delete-btn'} onClick={() => dispatch({ type: 'removeExpense', payload: expense.id })}>Supprimer</button>
            </td>
        </tr>
    )
}

export default ExpenseItem;