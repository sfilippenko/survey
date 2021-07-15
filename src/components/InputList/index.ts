import InputList, { Props } from './InputList';
import withFormField from '../withFormField';

export type InputListProps = Props;
export const InputListFormField = withFormField<
  InputListProps,
  InputListProps['onChange'],
  InputListProps['value']
>(InputList);
export default InputList;
