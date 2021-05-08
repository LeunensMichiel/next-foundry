import { Fieldset, Form, Layout } from '@components/common';
import { AtSign, Chevron } from '@components/icons';
import {
  Button,
  Checkbox,
  Input,
  RadioButton,
  Switch,
  TextArea,
} from '@components/ui';
import { useForm } from 'react-hook-form';

type FormValues = {
  text: string;
  radioVal: string;
  number: number;
  message: string;
  password: string;
  checkbox: boolean;
  checkbox2: boolean;
  switch: boolean;
  switch2: boolean;
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Test Text"
          {...register('text', { required: 'This is a required field' })}
          placeholder="Enter a string"
          error={errors?.text}
          iconLeft={<AtSign />}
          iconRight={<Chevron />}
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
          <Checkbox label="Second box" disabled {...register('checkbox2')} />
        </Fieldset>
        <TextArea
          label="Message"
          {...register('message', { required: 'This is a required field' })}
          placeholder="Enter a message"
          iconLeft={<AtSign />}
        />
        <Fieldset label="Some radios" error={errors?.radioVal}>
          <RadioButton label="Value 1" {...register('radioVal')} value="1" />
          <RadioButton label="Value 2" {...register('radioVal')} value="2" />
          <RadioButton label="Value 3" {...register('radioVal')} value="3" />
          <RadioButton label="Value 4" {...register('radioVal')} value="4" />
          <RadioButton
            label="Value 2 adawdadawdawdadadawda adad"
            {...register('radioVal')}
            value="222222"
            disabled
          />
        </Fieldset>
        <Fieldset
          label="Some Switches"
          error={errors?.switch || errors?.switch2}
        >
          <Switch label="Test" labelOn="😀" {...register('switch')} />
          <Switch label="disabled" disabled {...register('switch2')} />
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
