import React from 'react'
import {v4 as fakeId} from 'uuid'
import Tags from "./Tags";

const Form = ({onSubmit}) => {
  const [title, setTitle] = React.useState('')
  const [active, isActive] = React.useState(false)

  const handleSubmit = () => {
    event.preventDefault()

    const item = {
      id: fakeId(),
      title: title,
      isChecked: false,
    }

    onSubmit(item)
    // reset
    setTitle('')
  }

  return (
    <form className='mb-8' onSubmit={handleSubmit}>
      <div className='flex items-end'>
        <div className='ui-input' style={{width: '100%'}}>
          <label htmlFor='input-DqS1'>Enter todo</label>
          <input
            id='input-DqS1'
            required
            type='text'
            value={title}
            placeholder='Enter todo here'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className='ui-button isPrimary' type='submit'>
          Submit
        </button>
      </div>

      { /* тэг может иметь свойство 'active' где будет сменяться opacity */}
      <Tags classNames='?' onItemsClick={() => isActive(true)}/>
    </form>
  )
}

export default Form
