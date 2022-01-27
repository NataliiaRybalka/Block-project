import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './Auth.css';
import { registration } from '../../redux/actions/auth.actions';

import { Email } from "./Email";
import { Password } from "./Password";
import { LoginInput } from "./LoginInput";

export const Registration = () => {
  const [inputValues, setInputValues] = useState({
    login: '',
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

  const onHandleRegistration = async () => {
    dispatch(registration(inputValues));

    setInputValues({
      login: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className={'form'}>
      <LoginInput value={inputValues.login} changeInput={onChangeInputHandler} />
      <Email value={inputValues.email} changeInput={onChangeInputHandler} />
      <Password value={inputValues.password} changeInput={onChangeInputHandler} />
      
      <button onClick={onHandleRegistration}>send</button>
    </div>
  );
};