import { Styles } from 'react-select';
import { Option } from '../../types/common';
import {
  COLORS,
  CONTROL_BORDER_RADIUS,
  CONTROL_HEIGHT,
  CONTROL_PADDING_HORIZONTAL,
} from '../../styles/consts';

const styles: Styles<Option, false> = {
  control: (provided, state) => {
    const backgroundColor = (() => {
      if (state.menuIsOpen || state.isDisabled) {
        return COLORS.GREY_LIGHT;
      }
      return 'transparent';
    })();
    return {
      ...provided,
      minHeight: CONTROL_HEIGHT,
      borderRadius: CONTROL_BORDER_RADIUS,
      boxShadow: 'none',
      backgroundColor,
      borderColor: COLORS.GREY,
      outline: state.isFocused ? `1px auto ${COLORS.BLUE}` : 'none',
      '&:hover': {
        borderColor: COLORS.GREY,
      },
    };
  },
  indicatorSeparator: () => {
    return {
      display: 'none',
    };
  },
  placeholder: (provided) => {
    return {
      ...provided,
      color: COLORS.GREY,
    };
  },
  singleValue: (provided, state) => {
    return {
      ...provided,
      marginLeft: 0,
      marginRight: 0,
      color: state.isDisabled ? COLORS.GREY : '#000000',
    };
  },
  valueContainer: (provided) => {
    return {
      ...provided,
      padding: `2px ${CONTROL_PADDING_HORIZONTAL}px`,
    };
  },
  option: (provided, state) => {
    return {
      ...provided,
      padding: '8px 20px',
      color: '#000000',
      backgroundColor: state.isSelected ? COLORS.YELLOW : 'transparent',
      '&:hover': {
        backgroundColor: state.isSelected ? COLORS.YELLOW : COLORS.YELLOW_HOVER,
      },
      '&:active': {
        backgroundColor: COLORS.YELLOW,
      },
    };
  },
};

export default styles;
