import { Form, Layout } from '@components/common';
import { Button, Input } from '@components/ui';
import { useForm } from 'react-hook-form';

type FormValues = {
  text: string;
  number: number;
  password: string;
};

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({});

  // eslint-disable-next-line no-console
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <div className="container mx-auto padded">
      <h1>Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="new-password">
        <Input
          label="Test Text"
          {...register('text')}
          placeholder="Enter a string"
        />
        <Input
          label="Test Number"
          {...register('number')}
          type="number"
          max="5"
          placeholder="Enter a number"
        />
        <Input
          label="Test Password"
          {...register('password')}
          type="password"
          placeholder="Enter a password"
        />
        <Button loading={isSubmitting} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormPage;

FormPage.Layout = Layout;
