import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';


function ExpenseItem(props) {
    // const expenseDate = new Date(2022, 7, 16);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;props.date.toISOString()

    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();
    // const [title, setTitle] = useState(props.title);
    // let title = props.title;
    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     // title = 'Updated';
    //     console.log(title)
    // };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;