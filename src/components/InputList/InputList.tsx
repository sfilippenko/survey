import { FC, useCallback, useEffect, useRef } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import Input, { InputProps, InputOnChangeParams } from '../Input';
import useStyles from './styles';

export interface Props extends Omit<InputProps, 'value' | 'onChange'> {
  value: string[];
  onChange: (value: string[]) => void;
}

const InputList: FC<Props> = (props) => {
  const { onChange, value, disabled, ...rest } = props;
  const valueRef = useRef(value);
  const classes = useStyles();

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const handleChange = useCallback(
    (value: string, { customId }: InputOnChangeParams = {}) => {
      onChange(
        valueRef.current.map((item, index) => {
          if (index === customId) {
            return value;
          }
          return item;
        }),
      );
    },
    [onChange],
  );

  const handleAddClick = useCallback(() => {
    onChange([...valueRef.current, '']);
  }, [onChange]);

  return (
    <table className={classes.table}>
      <colgroup>
        <col width="100%" />
      </colgroup>
      <tbody>
        {value.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <Input
                  disabled={disabled}
                  customId={index}
                  value={value[index]}
                  onChange={handleChange}
                  {...rest}
                />
              </td>
              {value.length !== 1 && (
                <td className={classes.cellPAdding}>
                  <IconButton
                    disabled={disabled}
                    onClick={() =>
                      onChange(value.filter((item, valueIndex) => valueIndex !== index))
                    }>
                    <HighlightOffIcon className={classes.deleteIcon} />
                  </IconButton>
                </td>
              )}
              {index === value.length - 1 && (
                <td className={classes.cellPAdding}>
                  <ButtonBase disabled={disabled} onClick={handleAddClick}>
                    <ControlPointIcon />
                    <span className={classes.addButtonText}>Добавить еще</span>
                  </ButtonBase>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InputList;
