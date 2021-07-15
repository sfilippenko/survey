import Select, { Props } from './Select';
import withFormField from '../withFormField';

export type SelectProps = Props;
export const SelectFormField = withFormField<
  SelectProps,
  SelectProps['onChange'],
  SelectProps['value']
>(Select);
export default Select;
