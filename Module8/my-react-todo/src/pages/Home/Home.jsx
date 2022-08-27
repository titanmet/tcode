import React from 'react'

import {Container} from 'layouts'

import {Form, List} from 'components/Todo'

import todos from 'seeders/todos.json'

const HomePage = () => {
  // data from LocalStorage
  const localItems = JSON.parse(localStorage.getItem('items')) || null
  // final input
  const items_ =  localItems && localItems.length > 0 ? localItems : todos
  const [items, setItems] = React.useState(items_ || [])

  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }

  const handleChangeItem = (id) => {
    const nextItems = items.map((el) => el.id === id ? {...el, isChecked: !el.isChecked} : el)
    setItems(nextItems)
  }

  const handleRemoveItem = (id) => {
    const nextItems = [...items]
    const indexForRemove = nextItems.findIndex((el)=> el.id === id)
    nextItems.splice(indexForRemove, 1)

    setItems(nextItems)
  }

  React.useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <Container>
      <Form onSubmit={handleSubmit}/>
      <List
        items={items}
        onChangeItem={handleChangeItem}
        onRemoveItem={handleRemoveItem}
      />
    </Container>
  )
};

export default HomePage
