import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filter, setFilter] = useState('2021');

    function expenseFilterChangedHandler(value) {
        setFilter(value);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filter;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onChangeFilter={expenseFilterChangedHandler}/>
                <ExpensesChart expenses = {filteredExpenses} />
                <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;