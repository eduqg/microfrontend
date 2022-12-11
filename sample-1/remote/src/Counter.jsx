import { createSignal } from 'solid-js'

export default () => {
  const [count, setCount] = createSignal(0)

  return (
    <div style="background-color: lightblue">
      <div>Count = {count()}</div>
      <button
        type='button'
        onClick={() => setCount(count() + 1)}
        style={{ border: '1px solid gray' }}
      >
        Increase
      </button>
    </div>
  )
}