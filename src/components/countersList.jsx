import React, {useState} from 'react';
import Counter from "./counter";
import {getValue} from "@testing-library/user-event/dist/utils";

const CountersList = () => {
    const initialState = [
        {id:0, value:0, name: 'Ненужная вещь', price:'200'},
        {id:1, value:4, name: 'Ложка'},
        {id:2, value:0, name: 'Вилка'},
        {id:3, value:0, name: 'Тарелка'},
        {id:4, value:0, name: 'Набор минималиста'}
    ]
    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id)=>{
        const newCounters = counters.filter((c)=>c.id !==id)
        setCounters(newCounters)
    }
    const handleReset =()=>{
        setCounters(initialState)
    }
    const handleIncrement = (id) => {
       const updatedCounters = counters.map((el)=>(
         el.id === id? {...el, value: el.value+1}
           :
           el
       ))
        setCounters(updatedCounters)
        // setValue((prevState) => prevState + 1);
    };
    const handleDecrement = (id) => {
        const updatedCounters = counters.map((el)=>(
          el.id === id? {...el, value: el.value-1}
            :
            el
        ))
        setCounters(updatedCounters)
        // setValue((prevState) => prevState - 1);
    };

    return (
      <>
          {counters.map((count)=>(
            <Counter key={count.id}
            onDelete={handleDelete}
              {...count}
                     onDecrement={handleDecrement}
                     onIncrement={handleIncrement}
            />
          ))}
          <button className="btn btn-sm btn-primary m-2" onClick={handleReset}>Сброс</button>

      </>
    );
};

export default CountersList;