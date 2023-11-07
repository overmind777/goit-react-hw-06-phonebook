import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/sliceContact';
import styled from 'styled-components';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter name"
      />
      <input
        value={number}
        onChange={e => {
          setNumber(e.target.value);
        }}
        type="tel"
        placeholder="Enter phone"
      />
      <ButtonStyled>Add contact</ButtonStyled>
    </FormStyled>
  );
};

//============================================================================================

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ButtonStyled = styled.button`
  width: 100px;
  height: 30px;
`;

export default Form;
