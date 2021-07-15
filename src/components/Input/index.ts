import Input, { Props, Params } from './Input';
import withFormField from '../withFormField';

export type InputProps = Props;
export type InputOnChangeParams = Params;
export const InputFormField = withFormField<
  InputProps,
  InputProps['onChange'],
  InputProps['value']
>(Input);
export default Input;
