import React, { useState } from 'react'
/* import { useForm } from 'react-hook-form'
 */
import styled from 'styled-components'

import OAuth from '../OAuth'

/* import { schema } from './Form/schema'
 */
/* import { useYupValidationResolver } from '../../../hooks/validation_schema' */
/* import { yupResolver } from "@hookform/resolvers/yup"
 */
export default function SignIn() {
  /* const resolver = useYupValidationResolver(schema); */
/*   const [inputMap, setInputMap] = useState(new Map());
 */  /* const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) }) */
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // trocar o console.log por uma requisição
/*   const onSubmit = async data => { console.log(data) }
 */
  //console.log(errors.password)

  /* function selectInputOnClick(type) {
    const selected = inputMap.has(type)
    if (selected) {
      inputMap.delete(type)
      setInputMap(new Map(inputMap))
    } else {
      setInputMap(new Map(inputMap.set(type)))
    }
  } */

  return (
    <SignInWrapper>
      <LoginContainer>
        <div className='aux-div-exit-modal'>
          <div className='exit-modal-left-spacer'/>
          <div className='exit-modal' onClick={()=>console.log('colocar função de saída aqui')}>x</div>
        </div>
        <div className='signin-modal-title'>Log in to BookStore</div>
        <OAuth/>
        <div className='aux-div-signin-modal-spacer'>
          <div className='signin-modal-spacer'/>
          <p>or</p>
          <div className='signin-modal-spacer'/>
        </div>
        <Form>
          <div className='wrapper-input'>
            <input type='email' className={email !== "" ? 'has-value input' : 'input'} value={email} onChange={e => setEmail(e.target.value)}/*  {...register('email')} *//>
            <span className='focus-input' data-placeholder='Email'></span>
          </div>
          <div className='wrapper-input'>
            <input type='password' className={password !== "" ? 'has-value input' : 'input'} value={password} onChange={e => setPassword(e.target.value)}/*  {...register('password')} *//>
            <span className='focus-input' data-placeholder='Password'></span>
          </div>
          {/* {errors.email && <span>This is a email</span>} */}
          {/*{errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>} */}
          
          {/* {errors.password && <span>This is a password</span>} */}
{/*           {errors.name && errors.name.type === "required" && <span>This is required</span>}
          {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>} */}
        </Form>
        <div>Forgot password?</div>
        <div className='wrapper-login-btn'>
          <button className='login-btn'/*  onClick={handleSubmit(onSubmit)} */>Log in</button>
        </div>
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
    margin-bottom: 37px;

    :first-child {
      margin-top: 15px;
    }

    :last-child {
      margin-bottom: 30px;
    }

    .input {
      font-size: 15px;
      color: #000;
      line-height: 1.2;
      border: none;
      display: block;
      width: 100%;
      height: 45px;
      background-color: transparent;
      padding: 0 5px;
    }

    .focus-input {
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
      width: 0;
      height: 2px;

      transition: all 400ms ease-in-out 0s;
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      
      background: -webkit-linear-gradient(to left, #209CEE, #209CEE);
      background: -o-linear-gradient(to left, #209CEE, #209CEE);
      background: -moz-linear-gradient(to left, #209CEE, #209CEE);
      background: linear-gradient(to left, #209CEE, #209CEE);
    }

    .focus-input::after {
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

    .input:focus + .focus-input::after {
      top: -15px;
    }

    .input:focus + .focus-input::before {
      width: 100%;
    }

    .has-value + .focus-input::after {
      top: -15px;
    }

    .has-value + .focus-input::before {
      width: 100%;
    }
  }

/*   input {
    width: 85%;
    height: 35px;
    box-shadow: 0 0 0 0;
    border: 1px solid;
    border-radius: 15px;
    outline: none;
    padding: 0 0 0 10px;
    margin: 5px 0 10px 0;
    border-color: ${(props) => props.changeinputbordercolor};
    color: #000000;
    

    ::placeholder {
      color: #7B807E;

    } */

/*     input::-ms-reveal {
      position: absolute;
      display: inside;
    } */
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
  height: 600px;
  background-color: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 20px;
  font-family: "Inter", sans-serif;
  font-size: .8em;
  outline: 0;
  overflow: hidden;

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