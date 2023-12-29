import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
export const CheckBox = () => {
    const [data, setData] = useState([])
    const onChangeCheckFn = (event) => {
      console.log(event)
      const { checked, value, id } = event.target
      
      if (checked) {
        setData([...data, {
          id: nanoid(),
          value: value,
        }])
      }
      else {
        let newVal = data.filter((e) => e.value !== value)
        setData(newVal)
      }
  
  
  
    }
    useEffect(() => {
      console.log(data, ":::::::Data:::::::::")
    })
  return (
    <div><div className="App">
    <div>
      <input type="checkbox" id="123456" value="january" onChange={onChangeCheckFn} />
      <label>Jan</label>
    </div>
    <div>
      <input type="checkbox" value="february" onChange={onChangeCheckFn} />
      <label>Feb</label>
    </div>
    <div>
      <input type="checkbox" value="march" onChange={onChangeCheckFn} />
      <label>March</label>
    </div>
    <div>
      <input type="checkbox" value="april" onChange={onChangeCheckFn} />
      <label>Apri</label>
    </div>
  </div></div>
  )
}
