import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema } from '../../../../../schemas/SignUpSchema'
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
      <div className='alignment-aux-div'>
        <div className='wrapper-input'>
          <input
            type='name'
            name='name'
            className={form.name ? 'has-value input' : 'input'}
            {...register('name', { onChange: handleChange })}
          />
          <span
            className={!errors.name ? 'focus-input' : 'focus-input-error'}
            data-placeholder='Name'
          />
        </div>
        <div className='wrapper-input'>
          <input
            type='surname'
            name='surname'
            className={form.surname ? 'has-value input' : 'input'}
            {...register('surname', { onChange: handleChange })}
          />
          <span
            className={!errors.surname ? 'focus-input' : 'focus-input-error'}
            data-placeholder='Surname'
          />
        </div>
      </div>
      <div className='wrapper-input'>
        <input
          type='phone'
          name='phone'
          className={form.phone ? 'has-value input' : 'input'}
          {...register('phone', { onChange: handleChange })}
        />
        <span
          className={!errors.phone ? 'focus-input' : 'focus-input-error'}
          data-placeholder='Phone'
        />
      </div>
      <div className='terms-of-service'></div>
      <div className='wrapper-login-btn'>
        <button className='login-btn' onClick={handleSubmit(onSubmit)}>
          Log In
        </button>
      </div>
    </FormContainer>
  )
}
