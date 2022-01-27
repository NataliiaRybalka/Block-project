import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import './Auth.css';
import { login } from '../../redux/actions/auth.actions';
import { Registration } from "./Registration";
import { Email } from "./Email";
import { Password } from "./Password";
import { Block } from "../block/Block";

export const Login = () => {
  const [toRegistration, setToRegistration] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const user = useSelector(state => state.authReducer.user);

  const onChangeInputHandler = e => {
    setInputValues(prev => ({
        ...prev,
        ...{[e.target.name]: e.target.value}
    }));
  };

  const onHandleLogin = async () => {
    dispatch(login(inputValues));

    setInputValues({
      email: '',
      password: ''
    });
  };

  return (
    <div className={'form'}>
      <Email value={inputValues.email} changeInput={onChangeInputHandler} />
      <Password value={inputValues.password} changeInput={onChangeInputHandler} />
      
      <button onClick={onHandleLogin}>send</button>

      <span onClick={() => setToRegistration(true)} id={'toRegistration'}>registration</span>
      {toRegistration && <Redirect to='/registration'> <Registration /> </Redirect>}

      {Object.keys(user).length !== 0 && <Redirect to='/'> <Block /> </Redirect> }
    </div>
  );
};