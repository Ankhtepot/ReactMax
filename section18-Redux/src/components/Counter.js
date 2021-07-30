import classes from './Counter.module.css';
import {useSelector, useDispatch/*, connect*/} from 'react-redux';
import {counterActions} from "../store/counter-slice";
// import {Component} from "react";

const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);

    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
    };

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

// class CounterClass extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }
//
//     decrementHandler() {
//         this.props.decrement();
//     }
//
//     toggleCounterHandler() {
//
//     }
//
//     render() {
//         return (<main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div>
//                 <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                 <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//             </div>
//             <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//         </main>)
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//       counter: state.counter
//     };
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//       increment: () => dispatch({ type: 'INCREMENT'}),
//       decrement: () => dispatch({ type: 'DECREMENT'}),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
export default Counter;