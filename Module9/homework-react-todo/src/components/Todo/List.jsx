import React from 'react'
import Tags from "./Tags";

const List = ({ items, onChangeItem, onRemoveItem }) => {
  return (
    <div className='flex-col'>
      {items && items.length > 0
        ? items.map((item) => (
            <div
              key={item.id}
              className='flex justify-between items-center mb-2'
            >
              <div className='ui-checkbox'>
                <input
                  id={item.id}
                  type='checkbox'
                  checked={item.isChecked}
                  onChange={() => onChangeItem(item.id)}
                />
                <label htmlFor={item.id}>{item.title}</label>
                <Tags classNames='?' items='? item.tags ?' />
              </div>
              <span
                className='ui-link pl-2 text-sm'
                onClick={() => onRemoveItem(item.id)}
              >
                Remove
              </span>
            </div>
          ))
        : 'Items not found'}
    </div>
  )
}

export default List
