import react, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
};

export const SimpleForm = () => {
  const [data, setData] = useState<FormData>({
    firstName: '',
    lastName: '',
  });
  const { handleSubmit, register } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => setData(data));

  return (
    <>
      <h1>Simple form:</h1>
      <p>FirstName: {data.firstName}</p>
      <p>LastName: {data.lastName}</p>
      <form onSubmit={onSubmit}>
        <input
          type={'text'}
          placeholder={'FirstName'}
          {...register('firstName')}
        />
        <input
          type={'text'}
          placeholder={'LastName'}
          {...register('lastName')}
        />
        <input type={'submit'} title={'title'} />
      </form>
    </>
  );
};
