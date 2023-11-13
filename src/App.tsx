import { useState, useRef } from 'react';
import uuid4 from 'uuid4';

import './App.css'

import List from './classes/List'

let list = new List();

function App() {

  const taskInputRef = useRef(null);

  const [showList, setShowList] = useState({ showList: true, newItem: false, removedItem: false });

  const addTask = (target: any | null) => {
    if (target !== null) {
      list.add(target.value);
      setShowList((state) => { return { ...state, newItem: true } });
      target.value = "";
    }
  }

  const removeTask = () => {
    list.getList().shift();
    setShowList((state) => { return { ...state, removedItem: true } })
  }


  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-6xl font-bold'>To Do</h1>
      <h3 className='text-3xl font-semibold py-6 divide-y-0 divide-slate-800'>List of tasks</h3>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25 dark:opacity-100" />
      <div className='flex justify-center align-middle flex-col'>
        {
          showList &&
          list.getList().map((task) => (
            <div className='flex-item' key={uuid4()}>{task}</div>
          ))
        }
      </div>
      <div className='flex justify-center'>
        <div className='flex-initial py-10'>
          <input ref={taskInputRef} placeholder='Your task' className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500' name='task' type='text' onKeyDown={(e) => {
              if (e.key === 'Enter') {
                addTask(taskInputRef.current);
              }

            }} />
        </div>
      </div>
      <div className='flex'>
        <div className='flex-initial w-64'>
          <button className='hover:text-opacity-80 hover:border-slate-800' onClick={() => {
            addTask(taskInputRef.current);
          }}>
            Add
          </button>
        </div>
        <div className='flex-initial w-64'>
          <button className='hover:text-opacity-80 hover:border-slate-800' onClick={() => {
            removeTask();
          }}>
            Remove
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
