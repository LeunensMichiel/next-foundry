import { Fieldset, Form, Layout } from '@components/common';
import { AtSign, Chevron } from '@components/icons';
import {
  Button,
  Checkbox,
  DatePicker,
  Input,
  RadioButton,
  Select,
  Switch,
  TextArea,
} from '@components/ui';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';

type OptionType = { text: string; key: string };
type FormValues = {
  date: string;
  text: string;
  radioVal: string;
  number: number;
  message: string;
  password: string;
  checkbox: boolean;
  checkbox2: boolean;
  switch: boolean;
  switch2: boolean;
  select: OptionType;
};

const FormPage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    defaultValues: {
      date: '',
    },
  });

  const submit = useCallback((vals: FormValues) => {
    console.log(vals);
  }, []);

  return (
    <div className="container mx-auto padded">
      <Form onSubmit={handleSubmit(submit)}>
        <Input
          label="Test Text"
          {...register('text')}
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
        <Controller
          name="select"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <Select
              instanceId="select"
              label="Select"
              placeholder="Set to multi for multiselect"
              // isMulti
              // Defaults to value and label
              getOptionValue={(option) => option.key}
              getOptionLabel={(option) => option.text}
              options={[
                {
                  label: 'Group label',
                  options: [
                    { key: 'id2', text: 'This is a banana: \u{1F34C}' },
                    { key: 'id3', text: 'Hold up \u{1F171}' },
                  ],
                },
              ]}
              onChange={onChange}
              name={name}
              value={value}
            />
          )}
        />
        <Controller
          name="date"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              label="Date"
              onChange={onChange}
              value={value}
              mode="range"
            />
          )}
        />
        <Fieldset
          label="Some boxes"
          error={errors?.checkbox || errors?.checkbox2}
        >
          <Checkbox
            label="This is a Checkbox with a loooooooooooooooooooot of text"
            {...register('checkbox')}
          />
          <Checkbox label="Second box" disabled {...register('checkbox2')} />
        </Fieldset>
        <TextArea
          label="Message"
          {...register('message')}
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
          <Switch
            label="Test"
            labelOn="💡"
            labelOff="🌙"
            {...register('switch')}
          />
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
