import React, { Component } from 'react';
// import Creatable, { makeCreatableSelect } from 'react-select/creatable';
// import CreatableSelect from 'react-select/creatable';
import { Grid } from '@material-ui/core';
import UTMInput from './UTMInput';
import CopyToClipboard from './CopyToClipboard';

const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    color: 'black'
  })
}

const styles = {
  input: {
    backgroundColor: 'white'
  }
}

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const createOptionArray = (values) => {
  return values.map((value) => {
    return createOption(value);
  });
}

const convertOptionToValue = (options) => {
  return options.map((option) => {
    return option.value;
  });
}

export class UTMInputs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }

    this.handleCopy.bind(this);
  }
  
  handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.props.handleInput(name, value);
  }

  // handleChange = (newValue, actionMeta) => {
  //   console.group('Value Changed');
  //   console.log(newValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.log(this);
  //   console.groupEnd();
  //   this.props.handleChange(this.props.name, convertOptionToValue(newValue));
  // }

  // handleCreate = (newValue) => {
  //   const value = newValue.value;
  //   this.props.handleCreate(this.props.name, value);
  // }

  handleCopy = (event) => {
    const text = this.props.generateText(this.props.values);
    console.log(text);
    // copyTextToClipboard(text);
    
  }

  render() {
    const { sources, mediums, names, terms, content } = this.props.values;
    const { sources: source_options, mediums: medium_options, names: name_options, terms: term_options, content: content_options } = this.props.options;
    
    return (
      <div className="">
        <Grid container className="form-group">
          <Grid container xs={12} sm={6}>
            <Grid item xs={12} className="control-group">
              <label
                className="form-label">
                  URL
                  </label>
              <input
                className="entry"
                name="urls"
                value={this.props.values.urls}
                onChange={this.handleInput} />
            </Grid>
            <Grid item xs={12} className="control-group">
              <UTMInput
                name='sources'
                label='Campaign Source(s)'
                onChange={this.props.onChange}
                onCreateOption={this.props.onCreateOption}
                options={source_options}
                styles={selectStyles}
                value={sources}
              />
            </Grid>
            <Grid item xs={12} className="control-group">
              <UTMInput
                name='mediums'
                label='Marketing Medium(s)'
                onChange={this.props.onChange}
                onCreateOption={this.props.onCreateOption}
                options={medium_options}
                styles={selectStyles}
                value={mediums}
              />
            </Grid>
            <Grid item xs={12} className="control-group">
              <UTMInput
                name='names'
                label='Campaign Name(s)'
                onChange={this.props.onChange}
                onCreateOption={this.props.onCreateOption}
                options={name_options}
                styles={selectStyles}
                value={names}
              />
            </Grid>
            <Grid item xs={12} className="control-group">
              <UTMInput
                name='terms'
                label='Term(s)'
                onChange={this.props.onChange}
                onCreateOption={this.props.onCreateOption}
                options={term_options}
                styles={selectStyles}
                value={terms}
              />
            </Grid>
            <Grid item xs={12} className="control-group">
              <UTMInput
                name='content'
                label='Content'
                onChange={this.props.onChange}
                onCreateOption={this.props.onCreateOption}
                options={content_options}
                styles={selectStyles}
                value={content}
              />
            </Grid>
            <Grid item xs={12} className="control-group">
              <CopyToClipboard
              generateText={this.props.generateText} 
              values={this.props.values}/>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default UTMInputs;