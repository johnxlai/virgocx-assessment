import React from 'react';
import Form from '@/components/Form';

export default function Home() {
  return (
    <>
      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-white layout max-w-[380px]'>
            <Form />
          </div>
        </section>
      </main>
    </>
  );
}
