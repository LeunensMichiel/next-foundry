import { Fieldset, Form, Layout } from '@components/common';
import { AtSign } from '@components/icons';
import ChevronRight from '@components/icons/ChevronRight';
import { Button, Checkbox, Input } from '@components/ui';
import { useForm } from 'react-hook-form';

type FormValues = {
  text: string;
  number: number;
  password: string;
  checkbox: boolean;
  checkbox2: boolean;
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Test Text"
          {...register('text', { required: 'This is a required field' })}
          placeholder="Enter a string"
          error={errors?.text}
          iconLeft={<AtSign />}
          iconRight={<ChevronRight />}
          colSpan={2}
        />
        <Input
          label="Test Number"
          {...register('number', {
            max: { value: 20, message: 'Should be smaller than 20' },
          })}
          type="number"
          placeholder="Enter a number"
          error={errors?.number}
          pattern="[0-9]+([\.,][0-9]+)?"
          step="0.01"
          iconLeft={<AtSign />}
        />
        <Input
          label="Test Password"
          {...register('password')}
          type="password"
          placeholder="Enter a password"
          error={errors?.password}
        />
        <Fieldset
          label="Some boxes"
          error={errors?.checkbox || errors?.checkbox2}
        >
          <Checkbox
            label="This is a Checkbox with a loooooooooooooooooooot of text"
            {...register('checkbox', { required: 'This should be checked' })}
          />
          <Checkbox
            label="Second box"
            disabled
            {...register('checkbox2', {
              required: 'This should also! be checked',
            })}
          />
        </Fieldset>
        <Button loading={isSubmitting} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormPage;

FormPage.Layout = Layout;
