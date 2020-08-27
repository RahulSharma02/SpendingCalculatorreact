import React ,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

// INitial state 
const initialState= {
    transactions:[
   
   { id: 2, text: 'Salary', amount: 20000 },
   { id: 3, text: 'Gym Membership', amount: -1000 },
   { id: 4, text: 'Clothes', amount: -5000 }
    ]
} 

// create context
export const GlobalContext = createContext(initialState);

// provider

 export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);



    // Actions
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload :id
        });
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload :transaction
        });
    }

    return( 
        <GlobalContext.Provider value = {{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )

}