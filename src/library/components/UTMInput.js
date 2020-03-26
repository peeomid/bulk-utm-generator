import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';

const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    color: 'black'
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: 'calc(10px + 1vmin)'
  })
}

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const createOptionArray = (values) => {
  if (values) {
    return values.map((value) => {
      return createOption(value);
    });
  } else {
    return [];
  }
}

const convertOptionToValue = (options) => {
  if (options) {
    return options.map((option) => {
      return option.value;
    });
  } else {
    return []
  }
}


export default class UTMInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.handleChange.bind(this);
    this.handleCreate.bind(this);
  }

  handleChange = (newValue, actionMeta) => {
    // console.group('Value Changed');
    // console.log(newValue);
    // console.log(`action: ${actionMeta.action}`);
    // console.log(this);
    // console.log(convertOptionToValue(newValue));
    // console.groupEnd();
    this.props.onChange(this.props.name, convertOptionToValue(newValue));
  }

  handleCreate = (newValue) => {
    const value = newValue;
    this.props.onCreateOption(this.props.name, value);
  }

  render() {
    // console.log(this.props);
    const source_values = createOptionArray(this.props.options);
    const values = createOptionArray(this.props.value);
    return (
      <div>
        <label>{this.props.label}</label>
        <CreatableSelect
          isMulti
          name='sources'
          onChange={this.handleChange}
          onCreateOption={this.handleCreate}
          options={source_values}
          styles={selectStyles}
          value={values}
          closeMenuOnSelect={false}
          placeholder='Select or Type in to Create'
        />
      </div>
    )
  }
}
