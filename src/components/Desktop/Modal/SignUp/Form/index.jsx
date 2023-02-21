import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ThreeDots } from 'react-loader-spinner'

import { RegisterContext } from '../../../../../contexts/RegisterContext'
import { AuthContext } from '../../../../../contexts/AuthContext'

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
  const { registerUser, loadingRegister } = useContext(RegisterContext)
  const { loading } = useContext(AuthContext)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = data => {
    const { email, password, name, surname, phone } = data
    console.log('submit', { email, password, name, surname, phone })
    registerUser(email, password, name, surname, phone)
  }

  return (
    <FormContainer>
      <div className='wrapper-input'>
        <input
          type='email'
          name='email'
          disabled={loading || loadingRegister}
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
          disabled={loading || loadingRegister}
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
            disabled={loading || loadingRegister}
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
            disabled={loading || loadingRegister}
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
          disabled={loading || loadingRegister}
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
        <button
          className='login-btn'
          disabled={loading || loadingRegister}
          onClick={handleSubmit(onSubmit)}
        >
          {!(loading || loadingRegister) ? (
            'Create Account'
          ) : (
            <ThreeDots color='#FFFFFF' height={50} width={50} />
          )}
        </button>
      </div>
    </FormContainer>
  )
}
