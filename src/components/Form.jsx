import React, { useState } from 'react';
import Data from '../data/data.js';

const Form = () => {
  const [data, setData] = useState(Data);
  // Toggle Editable
  const [editable, setEditable] = useState(Data.isEditable);

  //Proficient in ReactJs
  const [isProficient, setIsProficient] = useState('no');

  const [firstName, setFirstName] = useState('');

  const handleRadioChange = (event) => {
    setIsProficient(event.target.value);
  };

  //Tools used
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckboxChange = (index) => {
    setCheckedItems({
      ...checkedItems,
      [index]: !checkedItems[index],
    });
  };

  //Form submit
  function handleSubmit(e) {
    e.preventDefault();

    setData({
      ...data, // Spread the existing data
      firstName, // Update the firstName
      isProficient, // Update the checked
      toolsUsed: checkedItems,
    });

    console.log(data);
  }

  return (
    <div className='w-full'>
      <form
        className='mx-auto bg-white p-8 mt-5 rounded-[20px] w-full'
        onSubmit={handleSubmit}
      >
        <div className='flex items-center justify-between w-full mb-3'>
          <div className='text-gray-700 font-medium'>
            {editable ? 'Editable' : 'Not Editable'}
          </div>
          <label
            htmlFor='toggle'
            className='switch flex items-center cursor-pointer'
          >
            <div className='relative -right-4'>
              <input
                type='checkbox'
                id='toggle'
                className='sr-only'
                checked={editable}
                onChange={() => {
                  setEditable(!editable);
                }}
              />
              <div className='block w-14 h-8 rounded-full'></div>
              <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
            </div>
            <div className='ml-3 text-gray-700 font-medium'></div>
          </label>
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='firstName'
          ></label>
          <input
            className=' appearance-none border w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='firstName'
            type='text'
            placeholder={!editable ? '' : 'First Name'}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            disabled={!editable}
          />
        </div>

        <div className='text-gray-700 flex flex-col gap-3 mb-3'>
          <label htmlFor='reactJs' className='font-bold'>
            Are you proficient in ReactJs development?
          </label>
          <label>
            <input
              type='radio'
              value='no'
              disabled={!editable}
              checked={isProficient === 'no'}
              onChange={handleRadioChange}
            />{' '}
            No
          </label>
          <label className='mb-3'>
            <input
              type='radio'
              value='yes'
              checked={isProficient === 'yes'}
              onChange={handleRadioChange}
              disabled={!editable}
            />{' '}
            Yes
          </label>
        </div>

        <div className='text-gray-700 flex flex-col gap-3'>
          <label htmlFor='toolsUsed' className='flex flex-col font-bold'>
            Which tools do you use?
            <span className='text-gray-400 text-xs font-normal'>
              Please select all that apply.
            </span>
          </label>

          {Data.values.map((option, index) => (
            <div key={index}>
              <input
                type='checkbox'
                id={option}
                checked={checkedItems[option] || false}
                disabled={!editable}
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
        <div className='text-center'>
          <button
            className='disabled:cursor-not-allowed disabled:opacity-80 disabled:bg-gray-500 disabled:border-gray-600 text-white hover:text-white border bg-primary focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full px-12 py-4 text-center mt-8 mb-2 tracking-wider '
            type='submit'
            disabled={!editable}
          >
            Process
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
