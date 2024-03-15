import { useExpenseContext } from "../utils/expenseContext"
import SelectCategory from "./SelectCategory";
import './Input.css';

const Input = () => {
    const { state, dispatch } = useExpenseContext();
    const error = state.errorMessage;

    console.log(state)

    const handleTitleChange = (e) => {
        dispatch({ type: 'setTitle', payload: e.target.value });
    };

    const handleAmountChange = (e) => {
        dispatch({ type: 'setAmount', payload: e.target.value });
    };

    return (
        <div className={'form-container'}>
            <div>
                <div className={'form container'}>
                    <input
                        type='text'
                        placeholder='Ajoute une dépense'
                        value={state.input.title}
                        onChange={handleTitleChange}
                    />
                    <input
                        type="text"
                        placeholder="Montant"
                        value={state.input.amount}
                        onChange={handleAmountChange}
                    />
                    <SelectCategory />
                    <button
                        className={'add-btn'}
                        onClick={() => {
                            if (state.input.title && state.input.amount && state.input.category) {
                                dispatch({ type: 'addExpense' })
                            } else {
                                dispatch({ type: 'error', payload: 'Veuillez rentrer un titre, un montant et une catégorie pour la dépense.' })
                            }
                        }} >Ajouter</button>
                </div>
                {
                    error !== '' && <p className={'error-message'}>{error}</p>
                }
            </div>
        </div>

    )
}

export default Input