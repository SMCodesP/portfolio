import Input from '../components/Input'
import Add from '../components/Add'

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
            margin: '5px',
            paddding: '0 5px',
          }}
          {...input}
        />
      </div>
    )
  },
  "array": (data) => (
    <div style={{
      marginLeft: '15px',
      flexDirection: 'column'
    }}>
      <label>{data.key} »</label>
      <Add
		data={data}
		name={data.key}
        style={{
          width: '64px !important',
          height: '64px !important',
          margin: '5px'
        }}
        styleInput={{
          padding: 0
        }}
      >+</Add>
    </div>
  ),
  "array_objects": (data, name) => (
    <>
      <label>{data.key}</label>
      <Add data={data} name={name} style={{
        width: '64px !important',
        height: '64px !important'
      }}>+</Add>
    </>
  ),
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

          return components[input.data_type](input)
        })}
      </div>
    )
  },
}

export default (key, data) => {
  return components[data.data_type]
}
