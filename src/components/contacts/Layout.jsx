import React from 'react';
import Form from './Form';
import Filter from './Filter';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact, selectContacts } from 'components/redux/sliceContact';
import { selectFind } from 'components/redux/sliceFind';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const Layout = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFind);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <WrapperStyled>
      <h2>Phone Contacts</h2>
      <Form />
      <Filter />
      <ListStyled>
        {filteredContacts?.map(({ id, name, number }) => {
          return (
            <ItemStyled key={id}>
              <p>
                {name} {number}
              </p>
              <button onClick={() => dispatch(removeContact(id))}>
                Delete
              </button>
            </ItemStyled>
          );
        })}
      </ListStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  list-style: none;
`;

const ItemStyled = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  & p {
    margin: 0;
  }
`;

export default Layout;
