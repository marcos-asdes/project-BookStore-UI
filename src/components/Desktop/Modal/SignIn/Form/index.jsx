import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ThreeDots } from 'react-loader-spinner'

import { AuthContext } from '../../../../../contexts/AuthContext'

import { schema } from '../../../../../schemas/SignInSchema'
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
  const { login, loading } = useContext(AuthContext)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = data => {
    const { email, password } = data
    console.log('submit', { email, password })
    login(email, password)
  }

  return (
    <FormContainer>
      <div className='wrapper-input'>
        <input
          type='email'
          name='email'
          disabled={loading}
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
          disabled={loading}
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
        <button
          className='login-btn'
          disabled={loading}
          onClick={handleSubmit(onSubmit)}
        >
          {!loading ? (
            'Log In'
          ) : (
            <ThreeDots color='#FFFFFF' height={50} width={50} />
          )}
        </button>
      </div>
    </FormContainer>
  )
}
