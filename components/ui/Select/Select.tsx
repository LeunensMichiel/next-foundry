import * as React from 'react';
import Select, { GroupBase, Props } from 'react-select';

type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = {
  //  instanceId is required for SSR in Next
  instanceId: number | string;
} & Props<Option, IsMulti, Group>;

const SelectField = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  isMulti,
  instanceId,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  return <Select isMulti={isMulti} {...props} instanceId={instanceId} />;
};

export default SelectField;
