import { createContext, useContext, useReducer } from 'react';
import expenseReducer, { initialState } from '../reducer/expenseReducer.jsx';

const ExpenseContext = createContext();

const ExpenseContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(expenseReducer, initialState);
    const categories = ['Alimentation', 'Logement', 'Transport', 'Divertissement', 'Santé', 'Éducation', 'Autres'];

    return (
        <ExpenseContext.Provider value={{ state, dispatch, categories }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export const useExpenseContext = () => {
    return useContext(ExpenseContext);
};

export default ExpenseContextProvider;