import { FC, useCallback, useEffect, useRef } from 'react';
import Checkbox, { CheckboxProps, CheckboxOnChangeParams } from '../Checkbox';
import { Option } from '../../types/common';
import useStyles from './styles';

export interface Props extends Omit<CheckboxProps, 'value' | 'onChange' | 'label'> {
  value: any[];
  onChange: (value: any) => void;
  options: Option[];
}

const CheckboxList: FC<Props> = (props) => {
  const { value, onChange, options, ...rest } = props;
  const classes = useStyles();

  const valueRef = useRef(value);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const handleChange = useCallback(
    (value: boolean, params: CheckboxOnChangeParams = {}) => {
      if (value) {
        onChange([...valueRef.current, params.customId]);
      } else {
        onChange(valueRef.current.filter((item) => item !== params.customId));
      }
    },
    [onChange],
  );

  return (
    <div className={classes.container}>
      {options?.map((item) => {
        return (
          <Checkbox
            onChange={handleChange}
            customId={item.value}
            key={item.value}
            label={item.label}
            value={value.includes(item.value)}
            {...rest}
          />
        );
      })}
    </div>
  );
};

export default CheckboxList;
