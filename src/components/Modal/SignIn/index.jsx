import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import styled from 'styled-components'

import OAuth from '../OAuth'
import ExitModal from '../ExitModal'

import { schema } from './Form/schema'

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [form, setForm] = useState({})
  
  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  // trocar o console.log por uma requisição
  const onSubmit = async data => { console.log(data) }

  return (
    <SignInWrapper>
      <LoginContainer>
        <ExitModal/>
        <Title>Log in to BookStore</Title>
        <OAuth/>
        <div className='aux-div-signin-modal-spacer'>
          <div className='signin-modal-spacer'/>
          <p>or</p>
          <div className='signin-modal-spacer'/>
        </div>
        <Form>      
          <div className='wrapper-input'>
            <input type='email' name='email'
            className={form.email ? 'has-value input' : 'input'}
            {...register('email', { onChange: handleChange })} />
            <span className={!errors.email ? 'focus-input' : 'focus-input-error'}
            data-placeholder='Email'/>
          </div>
          <div className='wrapper-input'>
            <input type='password' name='password'
            className={form.password ? 'has-value input' : 'input'}
            {...register('password', { onChange: handleChange })} />
            <span className={!errors.password ? 'focus-input' : 'focus-input-error'}
            data-placeholder='Password'/>
          </div>
          <Link to='/'>Forgot password?</Link>
          <div className='wrapper-login-btn'>
            <button className='login-btn' 
            onClick={handleSubmit(onSubmit)}>
              Log in
            </button>
          </div>
        </Form>
        <div>
          <p>No account?</p>
          <p>Create one</p>
        </div>
      </LoginContainer>
    </SignInWrapper>
  )
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper-input {
    width: 85%;
    position: relative;
    border-bottom: 2px solid #ADADAD;
    margin-bottom: 30px;

    :first-child {
      margin-top: 15px;
    }

    .input {
      font-size: 15px;
      color: #000;
      line-height: 1.2;
      border: none;
      display: block;
      width: 100%;
      height: 40px;
      background-color: transparent;
      padding: 0 5px;
      
    }

    .focus-input,
    .focus-input-error {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top:0;
      left:0;
      pointer-events: none;
      color: #000;
    }

    .focus-input::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #209CEE;
    }

    .focus-input-error::before {
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #FF0000;
    }

    .focus-input::after,
    .focus-input-error::after {
      font-size: 15px;
      color: #999999;
      line-height: 1.2;
      content: attr(data-placeholder);
      display: block;
      width: 100%;
      position: absolute;
      top: 16px;
      left: 0;
      padding-left: 5px;
      transition: all 400ms ease-in-out 0s;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
    }

    .input:focus {
      outline: 0;
    }

    .input:focus + .focus-input::after,
    .input:focus + .focus-input-error::after {
      top: -17px;
    }

    .input:focus + .focus-input::before,
    .input:focus + .focus-input-error::before {
      width: 100%;
    }

    .has-value + .focus-input::after,
    .has-value + .focus-input-error::after {
      top: -17px;
    }

    .has-value + .focus-input::before,
    .has-value + .focus-input-error::before {
      width: 100%;
    }
  }
`

const SignInWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.33);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.1px;
  margin: 0 0 15px 0;
  color: #000000;
`
const LoginContainer = styled.div`
  width: 350px;
  height: 600px;
  background-color: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  font-size: .8em;
  outline: 0;
  overflow: hidden;
  position: relative;
 
  .aux-div-signin-modal-spacer {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
      font-size: 1.25em;
      color: #7B807E;
    }

    .signin-modal-spacer {
      width: 35%;
      height: 1px;
      background-color: #D7D7D7;
    }
  }

  .wrapper-login-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 13px;

    .login-btn {
      font-size: 15px;
      border: none;
      border-radius: 10px;
      color: #fff;
      line-height: 1.2;
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;

      background: -webkit-linear-gradient(to left, #209CEE, #209CEE);
      background: -o-linear-gradient(to left, #209CEE, #209CEE);
      background: -moz-linear-gradient(to left, #209CEE, #209CEE);
      background: linear-gradient(to left, #209CEE, #209CEE);
    }

    .login-btn:hover {
      cursor: pointer;
    }
  }
`
