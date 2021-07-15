import InputNumber, { Props } from './InputNumber';
import withFormField from '../withFormField';

export type InputNumberProps = Props;
export const InputNumberFormField = withFormField<
  InputNumberProps,
  InputNumberProps['onChange'],
  InputNumberProps['value']
>(InputNumber);
export default InputNumber;
