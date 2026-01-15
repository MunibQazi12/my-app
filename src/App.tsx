import '@/App.css'
import { increment } from '@/features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="card">
      <button onClick={() => dispatch(increment())}>
        count is {count}
      </button>
    </div>
  )
}

export default App
