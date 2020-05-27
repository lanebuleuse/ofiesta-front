import React from 'react';

import PropTypes from 'prop-types';

import './field.scss';

const Field = ({
  name,
  styles,
  type,
  placeholder,
  onChange,
  value,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <label className="field-label" htmlFor={name}>{placeholder}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="field-input"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Field.propTypes = {
  styles: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Default value for props
Field.defaultProps = {
  styles: '',
  value: '',
  type: 'text',
};

export default Field;
