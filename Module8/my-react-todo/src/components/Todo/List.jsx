import React from 'react'

const List = ({items, onChangeItem, onRemoveItem}) => {

  return (
    <div className="view-sm flex-col items-center mb-2">
      {items && items.length > 0 ? items.map((item) => (
          <div className="flex justify-between">
            <div key={item.id} className="ui-checkbox">
              <input
                id={item.id}
                type="checkbox"
                checked={item.isChecked}
                onChange={() => onChangeItem(item.id)}
              />
              <label htmlFor={item.id}>{item.title}</label>
            </div>
            <span className='ui-link pl-2' onClick={()=>onRemoveItem(item.id)}>Remove</span>
          </div>
        ))
        : 'Items not found'}
    </div>
  )
}

export default List
