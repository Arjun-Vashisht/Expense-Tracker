import React, { useState } from 'react';
// import ExpenseItem from "./ExpenseItems";
import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    // console.log(props)
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    // let expensesContent = <p>No expenses found.</p>

    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map(expense => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>))
    // }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}
                {/* {filteredExpenses.length > 0 && filteredExpenses.map(expense => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>))} */}
                {/* {filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
                )} */}
                {/* {expensesContent} */}
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;

// import React, { useState } from 'react';

// import ExpenseItem from './ExpenseItem';
// import Card from '../UI/Card';
// import ExpensesFilter from './ExpensesFilter';
// import './Expenses.css';

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState('2020');

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   return (
//     <div>
//       <Card className='expenses'>
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         {props.items.map((expense) => (
//           <ExpenseItem
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}
//       </Card>
//     </div>
//   );
// };

// export default Expenses;