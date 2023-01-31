import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema } from '../../../../schemas/SignInSchema'
import { FormContainer } from './style'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
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
      <div className='wrapper-input'>
        <input
          type='email'
          name='email'
          className={form.email ? 'has-value input' : 'input'}
          {...register('email', { onChange: handleChange })}
        />
        <span
          className={!errors.email ? 'focus-input' : 'focus-input-error'}
          data-placeholder='Email'
        />
      </div>
      <div className='wrapper-input'>
        <input
          type='password'
          name='password'
          className={form.password ? 'has-value input' : 'input'}
          {...register('password', { onChange: handleChange })}
        />
        <span
          className={!errors.password ? 'focus-input' : 'focus-input-error'}
          data-placeholder='Password'
        />
      </div>
      <div className='aux-start-div'>
        <Link to='/'>Forgot password?</Link>
      </div>
      <div className='wrapper-login-btn'>
        <button className='login-btn' onClick={handleSubmit(onSubmit)}>
          Log In
        </button>
      </div>
    </FormContainer>
  )
}
