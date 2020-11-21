import Input from '../components/Input'
import Add from '../components/Add'
import AddAlternative from '../components/Add/alternative-index'

const components = {
  "input": (props) => {
    return (
      <Input
        style={{
          marginLeft: '15px'
        }}
        {...props}
      />
    )
  },
  "label_input": (input) => {
    return (
      <div
        style={{
          marginLeft: '15px',
          flexDirection: 'column'
        }}
      >
        <label>{input.key.replaceAll('_', ' ')} »</label>
        <Input
          style={{
            marginTop: '5px',
            marginBottom: '5px',
            marginRight: '5px',
            marginLeft: '5px',
            paddding: '0 5px',
          }}
          {...input}
        />
      </div>
    )
  },
  "array": (data) => {
    return (<div style={{
      marginLeft: '15px',
      flexDirection: 'column'
    }}>
      <label>{data.key} »</label>
      <AddAlternative
        data={data}
        name={data.name}
        style={{
          width: '64px !important',
          height: '64px !important',
          margin: '5px'
        }}
        styleInput={{
          padding: 0
        }}
      >+</AddAlternative>
    </div>
  )},
  "array_objects": (data, name) => {
    return (
    <>
      <label>{data.key}</label>
      <Add data={data} name={name} style={{
        width: '64px !important',
        height: '64px !important'
      }}>+</Add>
    </>
  )},
  "object_inputs": (data, key) => {
    const { inputs } = data
    
    return (
      <div
        style={{
          flexDirection: 'column',
          marginLeft: '5px'
        }}
      >
        {Object.keys(inputs).map((inputKey, index) => {
          let input = inputs[inputKey]

          input.key = inputKey || key

          return components[input.data_type]({
            ...input,
            name: `${key.toLowerCase()}.${input.name}`
          })
        })}
      </div>
    )
  },
}

export default (key, data) => {
  return components[data.data_type]
}
