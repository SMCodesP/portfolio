import { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

import {
  Button,
  ContainerInput
} from './styles'

import renderJSON from '../../utils/renderJSON'
import randomID from '../../utils/randomID'

export default ({children, style, styleInput, data, name = "default", ...params}) => {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems((itemsCache) => {
		  return [...itemsCache, {
        ...data.inputs,
        id_item: randomID()
      }]
    })
  }

  const removeItem = (id) => {
    document.getElementById(`container.${id}`).remove()
  }

  return (
    <>
      {(!!items[0]) && items.map((input, indexInput) => {
        return (
          <ContainerInput key={indexInput} style={styleInput} id={`container.${input.id_item}`}>
            <FaTrash
              size={16}
              color="#e02041"
              onClick={() => removeItem(input.id_item)}
              style={{
                marginRight: '25px',
                marginBottom: '5px',
                alignSelf: 'flex-end',
                cursor: 'pointer'
              }}
            />
            {Object.keys(input).map((inputKey) => {
              if (inputKey === "id_item")
                return;
              let inputConfig = input[inputKey]

              const newConfig = {
                ...inputConfig,
                key: inputKey || key,
                name: `${name.toLowerCase()}[${indexInput}]`,
              }

              const rendered = renderJSON(null, newConfig)

              return rendered(newConfig, `${name.toLowerCase()}[${indexInput}]`)
            })}
          </ContainerInput>
        )
      })}
      <Button style={style} onClick={addItem} {...params}>{children}</Button>
    </>
  )
}
