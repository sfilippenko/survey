import Checkbox, { Props, Params } from './Checkbox';
import withFormField from '../withFormField';

export type CheckboxProps = Props;
export type CheckboxOnChangeParams = Params;
export const CheckboxFormField = withFormField<
  CheckboxProps,
  CheckboxProps['onChange'],
  CheckboxProps['value']
>(Checkbox);
export default Checkbox;
