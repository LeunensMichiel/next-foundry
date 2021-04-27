import { Form, Layout } from '@components/common';
import { AtSign } from '@components/icons';
import ChevronRight from '@components/icons/ChevronRight';
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
    formState: { isSubmitting, errors },
  } = useForm<FormValues>();

  // eslint-disable-next-line no-console
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <div className="container mx-auto padded">
      <h1>Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="new-password">
        <Input
          label="Test Text"
          {...register('text', { required: 'This is a required field' })}
          placeholder="Enter a string"
          error={errors?.text}
          iconLeft={<AtSign />}
          iconRight={<ChevronRight />}
        />
        <Input
          label="Test Number"
          {...register('number', {
            max: { value: 20, message: 'Should be smaller than 20' },
          })}
          type="number"
          placeholder="Enter a number"
          error={errors?.number}
          iconLeft={<AtSign />}
        />
        <Input
          label="Test Password"
          {...register('password')}
          type="password"
          placeholder="Enter a password"
          error={errors?.password}
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
