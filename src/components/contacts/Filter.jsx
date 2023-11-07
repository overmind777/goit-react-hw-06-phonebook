import { getFindValue, selectFind } from 'components/redux/sliceFind';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const valueFindInput = useSelector(selectFind);

  const handleFindValue = e => {
    dispatch(getFindValue(e.target.value));
  };

  return (
    <div>
      <input
        value={valueFindInput}
        onChange={handleFindValue}
        type="text"
        placeholder="Find contacts"
      />
    </div>
  );
};

export default Filter;
