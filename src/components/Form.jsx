import React from 'react';
import Data from '../data/data.js';

const Form = () => {
  return (
    <div>
      Form
      {Data.isProficient ? 'I am proficient' : 'I am not proficient'}
    </div>
  );
};

export default Form;
