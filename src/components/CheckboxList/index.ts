import CheckboxList, { Props } from './CheckboxList';
import withFormField from '../withFormField';

export type CheckboxListProps = Props;
export const CheckboxListFormField = withFormField<
  CheckboxListProps,
  CheckboxListProps['onChange'],
  CheckboxListProps['value']
>(CheckboxList);
export default CheckboxList;
