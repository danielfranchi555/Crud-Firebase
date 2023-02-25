import React, { useEffect, useState } from 'react'
import { Button} from '@chakra-ui/react'
import './Form.scss'
import { useStateContext } from '../../assets/Context/Context'
const Form = ({addTask,updateTask}) => {



  const handleChange = (e)=>{
    const  {value}=e.target

    SetDataTask(value)
  }
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    addTask(dataTask)
    SetDataTask('')
  }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}  >
          <div>
                <input type="text" placeholder='add task'  onChange={handleChange}   name='task' />
          </div>
          <div>
            <Button type='submit' colorScheme='blue'>Add</Button>
          </div>
        </form>
    </div>
  )
}

export default Form