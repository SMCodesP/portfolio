import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

import {
  Button,
  ContainerInput
} from './styles'

import renderJSON from '../../utils/renderJSON'
import randomID from '../../utils/randomID'

export default ({children, style, styleInput, data, ...params}) => {
  const [items, setItems] = useState([])


  const addItem = () => {
    setItems((itemsCache) => {
      console.log(data.inputs)
      return [...itemsCache, {
        ...data.inputs,
        testeSLA: randomID()
      }]
    })
  }

  const removeItem = (id) => {
    setItems((itemsCache) => {
      const index = itemsCache.findIndex((item) => item.id === id)
      itemsCache.splice(index, 1)
      return [...itemsCache]
    })
  }

  return (
    <>
      {(!!items[0]) && items.map((input, indexInput) => {
        return (
          <ContainerInput key={indexInput} style={styleInput}>
            <FaTrash
              size={16}
              color="#e02041"
              onClick={() => removeItem(input.id)}
              style={{
                marginRight: '25px',
                marginBottom: '5px',
                alignSelf: 'flex-end',
                cursor: 'pointer'
              }}
            />
            {Object.keys(input).map((inputKey) => {
              let inputConfig = input[inputKey]

              inputConfig.key = inputKey || key
              inputConfig.name = `${inputConfig.name}[${input.id}]`

              const rendered = renderJSON(null, inputConfig)

              return rendered(inputConfig)
            })}
          </ContainerInput>
        )
      })}
      <Button style={style} onClick={addItem} {...params}>{children}</Button>
    </>
  )
}
