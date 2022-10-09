import React from 'react'
import { useForm } from 'react-hook-form'

import styled from 'styled-components'

import OAuth from '../OAuth'

import { schema } from './Form/schema'

import { useYupValidationResolver } from '../../../hooks/validation_schema'

export default function SignIn() {
  const resolver = useYupValidationResolver(schema);
  const { register, handleSubmit } = useForm({ resolver })

  // trocar o console.log por uma requisição
  const onSubmit = async data => { console.log(data) }

  return (
    <SignInWrapper>
      <LoginContainer>
        <div className='aux-div-exit-modal'>
          <div className='exit-modal-left-spacer'/>
          <div className='exit-modal' onClick={()=>console.log('colocar função aqui')}>x</div>
        </div>
        <div className='signin-modal-title'>Log in to BookStore</div>
        <OAuth/>
        <div className='aux-div-signin-modal-spacer'>
          <div className='signin-modal-spacer'/>
          <p>or</p>
          <div className='signin-modal-spacer'/>
        </div>
        <Form>
          <input placeholder='Email' type='email' {...register('email', { required: true, maxLength: 50 })}/>
{/*           {errors.name && errors.name.type === "required" && <span>This is required</span>}
          {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>} */}
          <input placeholder='Password' type='password' {...register('password', { required: true, maxLength: 20 })}/>
{/*           {errors.name && errors.name.type === "required" && <span>This is required</span>}
          {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>} */}
        </Form>
        <div>Forgot password?</div>
        <button onClick={handleSubmit(onSubmit)}>Log in</button>
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

  input {
    width: 85%;
    height: 35px;
    box-shadow: 0 0 0 0;
    border: 1px solid #7B807E;
    border-radius: 15px;
    outline: none;
    padding: 0 0 0 10px;
    margin: 5px 0 10px 0;
    color: #000000;

    ::placeholder {
      color: #7B807E;

    }

/*     input::-ms-reveal {
      position: absolute;
      display: inside;
    } */
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

const LoginContainer = styled.div`
  width: 350px;
  height: 400px;
  background-color: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  font-size: .8em;
  outline: 0;

  .aux-div-exit-modal {
    width: 100%;
    height: 30px;
    display: flex;

    .exit-modal-left-spacer {
      width: calc(100% - 30px);
      height: 100%;
    }

    .exit-modal {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 15px;
      height: 15px;
      margin: 15px 15px 0 0;
      font-size: 15px;
      color: #7B807E;
      cursor: pointer;
    }
  }
 
  .signin-modal-title {
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
  }

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
`

/*   width: 30%;
  height: 100%;
  box-shadow: 0 0 0 0;
  border: 1px solid #209CEE;
  color: #209CEE;
  background-color: white;
  outline: 0;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  letter-spacing: .1px;
  font-size: .8em;
  font-weight: 500; */