import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema } from '../../../../schemas/SignUpSchema'
import { FormContainer } from './style'

export default function Form() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })
  const [form, setForm] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // trocar o console.log por uma requisição
  const onSubmit = async data => {
    console.log(data)
  }

  return (
    <FormContainer>
      <input
        type='email'
        name='email'
        {...register('email', { onChange: handleChange })}
      />
      <input
        type='password'
        name='password'
        {...register('password', { onChange: handleChange })}
      />
      <div className='aux-div'>
        <input
          type='name'
          name='name'
          {...register('name', { onChange: handleChange })}
        />
        <input
          type='surname'
          name='surname'
          {...register('surname', { onChange: handleChange })}
        />
      </div>
      <input
        type='phone'
        name='phone'
        {...register('phone', { onChange: handleChange })}
      />
      <div className='terms-of-service'></div>
      <div className='wrapper-login-btn'>
        <button className='login-btn' onClick={handleSubmit(onSubmit)}>
          Log In
        </button>
      </div>
    </FormContainer>
  )
}
