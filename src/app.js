import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const appStore = configureStore();

appStore.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
appStore.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
appStore.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = appStore.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={ appStore }>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));