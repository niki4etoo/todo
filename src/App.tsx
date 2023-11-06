import './App.css'



function App() {

  

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-6xl font-bold'>To Do</h1>
      <h3 className='text-3xl font-semibold py-6 divide-y-0 divide-slate-800'>List of tasks</h3>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25 dark:opacity-100" />
      <div className='flex'>
        <div className='flex-initial w-64'>
          <button className='hover:text-opacity-80 hover:border-slate-800' onClick={() => {
            console.log(`add new task`)

          }}>
            Add
          </button>
        </div>
        <div className='flex-initial w-64'>
          <button className='hover:text-opacity-80 hover:border-slate-800' onClick={() => {
            console.log(`remove new task`)

          }}>
            Remove
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
