import React, { useState } from 'react';
import Data from '../data/data.js';

const Form = () => {
  const [isProficient, setIsProficient] = useState(Data.isProficient);

  const [firstName, setFirstName] = useState('');

  const [checked, setChecked] = useState(false);

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (itemName) => {
    setCheckedItems({
      ...checkedItems,
      [itemName]: !checkedItems[itemName],
    });
  };
  const checkboxOptions = [
    'Option 1',
    'Option 2',
    'Option 3',
    // Add more options as needed
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='w-full'>
      <div className='flex items-center justify-between w-full mb-12'>
        <div className='text-gray-700 font-medium'>Editable</div>
        <label
          htmlFor='toggle'
          className='switch flex items-center cursor-pointer'
        >
          <div className='relative'>
            <input
              type='checkbox'
              id='toggle'
              className='sr-only'
              checked={checked}
              onChange={() => {
                setChecked(!checked);
                setIsProficient(!isProficient);
              }}
            />
            <div className='block bg-gray-600 w-14 h-8 rounded-full'></div>
            <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
          </div>
          <div className='ml-3 text-gray-700 font-medium'></div>
        </label>
      </div>
      {isProficient ? 'I am proficient' : 'I am not proficient'}

      <form
        className='mx-auto bg-white p-5 mt-5 rounded-md w-full'
        onSubmit={handleSubmit}
      >
        {/* <label className='switch'>
            <input type='checkbox' />
            <span className='slider round'></span>
          </label> */}

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='firstName'
          ></label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='firstName'
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={!isProficient}
          />
        </div>

        <div className='text-gray-700 flex flex-col mb-3'>
          <label htmlFor='reactJs' className=''>
            Are you proficient in ReactJs development?
          </label>
          <label>
            <input
              type='radio'
              name='myRadio'
              value='no'
              defaultChecked={true}
              disabled={!isProficient}
            />{' '}
            No
          </label>
          <label>
            <input
              type='radio'
              name='myRadio'
              value='yes'
              disabled={!isProficient}
            />{' '}
            Yes
          </label>
        </div>

        <div className='text-gray-700 flex flex-col'>
          <label htmlFor='toolsUsed' className='flex flex-col'>
            Which tools do you use?
            <span className='text-gray-400 text-xs mb-3'>
              Please select all that apply.
            </span>
          </label>

          {checkboxOptions.map((option, index) => (
            <div key={index}>
              <input
                type='checkbox'
                id={option}
                checked={checkedItems[option] || false}
                disabled={!isProficient}
                onChange={() => handleCheckboxChange(option)}
              />
              <label htmlFor={option}> {option}</label>
            </div>
          ))}
          <p>
            Selected options:{' '}
            {Object.keys(checkedItems)
              .filter((item) => checkedItems[item])
              .join(', ')}
          </p>
        </div>

        <button
          className='disabled:cursor-not-allowed disabled:opacity-80 disabled:bg-gray-500 disabled:border-gray-600 text-white hover:text-white border border-green-500 bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  uppercase tracking-wider '
          type='submit'
          disabled={!isProficient}
        >
          Process
        </button>
      </form>
    </div>
  );
};

export default Form;
