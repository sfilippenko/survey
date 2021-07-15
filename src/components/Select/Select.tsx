import SelectLib, { ActionMeta } from 'react-select';
import { FC, useCallback, useMemo } from 'react';
import { Option } from '../../types/common';
import styles from './styles';

export interface Props {
  disabled?: boolean;
  options: Option[];
  value: any;
  onChange: (value: any) => void;
  onBlur?: () => void;
}

const Select: FC<Props> = (props) => {
  const { disabled, options, value, onChange, onBlur } = props;

  const selectValue = useMemo(() => {
    return options?.find((item) => item.value === value);
  }, [value, options]);

  const getOptionValue = useCallback((option: Option) => {
    return option.value;
  }, []);

  const getOptionLabel = useCallback((option: Option) => {
    return option.label;
  }, []);

  const handleChange = useCallback(
    (value: Option | null | undefined, meta: ActionMeta<Option>) => {
      switch (meta.action) {
        case 'select-option': {
          onChange(value?.value);
          break;
        }
        default: {
          break;
        }
      }
    },
    [onChange],
  );

  return (
    <SelectLib<Option>
      onChange={handleChange}
      onBlur={onBlur}
      value={selectValue}
      getOptionValue={getOptionValue}
      getOptionLabel={getOptionLabel}
      options={options}
      isDisabled={disabled}
      isClearable={false}
      isSearchable={false}
      styles={styles}
    />
  );
};

export default Select;
