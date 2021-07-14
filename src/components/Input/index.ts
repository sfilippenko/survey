import Input, { Props } from './Input';
import withFormField from '../withFormField';

export type InputProps = Props;
export const InputFormField = withFormField<
  InputProps,
  InputProps['onChange'],
  InputProps['value']
>(Input);
export default Input;
