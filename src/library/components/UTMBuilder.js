import React, { Component } from 'react'
import UTMInputs from './UTMInputs';
import UTMTable from './UTMTable';
import buildUrl from 'build-url';
import { Grid } from '@material-ui/core';

function cartesian() {
  // From https://stackoverflow.com/a/15310051
  var r = [], arg = arguments, max = arg.length - 1;
  function helper(arr, i) {
    for (var j = 0, l = arg[i].length; j < l; j++) {
      var a = arr.slice(0); // clone arr
      a.push(arg[i][j]);
      if (i === max)
        r.push(a);
      else
        helper(a, i + 1);
    }
  }
  helper([], 0);
  return r;
}

function assignDefaultArrayValue(state_value) {
  if (state_value && state_value.length) {
    return state_value;
  } else {
    return ['']
  }
}

export class UTMBuilder extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      utm_options: {
        sources: ['google', 'facebook', 'newsletter'],
        mediums: ['cpc', 'banner', 'email'],
        names: [],
        terms: [],
        content: []
      },
      utm_values: {
        urls: ['http://anancial.com'],
        sources: [],
        mediums: [],
        names: [],
        terms: [],
        content: []
      }
    }

    this.handleInput.bind(this);
    this.generateValues.bind(this);
  }

  handleInput = (name, value) => {
    const { utm_values } = this.state;
    this.setState({
      utm_values: { ...utm_values, [name]: [value] }
    })
  }

  handleChange = (name, value) => {
    const { utm_values } = this.state;
    // const name_values = utm_values[name];
    this.setState({
      utm_values: {...utm_values, [name]: value}
    })
  }

  handleCreate = (name, value) => {
    const utm_values = this.state.utm_values;
    const name_values = utm_values[name];
    const utm_options = this.state.utm_options;
    const name_options = utm_options[name];
    console.log(utm_options);
    console.log(name_options);
  
    this.setState({
      utm_values: { ...utm_values, [name]: [...name_values, value] },
      utm_options: {...utm_options, [name]: [...name_options, value]}
    });
  }
 
  composeUrl = (url, source, medium, name, term, content) => {
    let params = {};
    if (source) {
      params.source = source;
    }
    if (medium) {
      params.medium = medium;
    }
    if (name) {
      params.name = name;
    }
    if (term) {
      params.term = term;
    }
    if (content) {
      params.content = content;
    }
    return buildUrl(url, {
      queryParams: params
    })
  }
  
  generateValues = (utm_values) => {
    // const utm_values = this.state.utm_values;
    console.log("values");
    console.log(utm_values);
    const urls = assignDefaultArrayValue(utm_values.urls);
    const sources = assignDefaultArrayValue(utm_values.sources);
    const mediums = assignDefaultArrayValue(utm_values.mediums);
    const names = assignDefaultArrayValue(utm_values.names);
    const terms = assignDefaultArrayValue(utm_values.terms);
    const content = assignDefaultArrayValue(utm_values.content);
    const all_combinations = cartesian(urls, sources, mediums, names, terms, content);
    console.log("combinations")
    console.log(all_combinations);

    return all_combinations.map((combination) => {
      const [ url, source, medium, name, term, content ] = combination;
      const generated_url = this.composeUrl(url, source, medium, name, term, content)
      return {
        url: url,
        source: source,
        medium: medium,
        name: name,
        term: term,
        content: content,
        generated_url: generated_url
      }
    })
  }

  generateTextValues = (utm_values) => {
    const generated_values = this.generateValues(utm_values);

    const text_value_array = generated_values.map((row) => {
      const { url, source, medium, name, term, content, generated_url } = row;
      return `${url}\t${source}\t${medium}\t${name}\t${term}\t${content}\t${generated_url}\t`;
    });

    const text_rows = text_value_array.join("\n");
    const header = "Url\tSource\tMedium\tCampaign Name\tCampaign Term\tContent\tGenerated Url";
    return `${header}\n${text_rows}`
  }
  
  render() {
    return (
      <div>
        <h1>Bulk UTM Generator</h1>
        <Grid container className="form-group">
          <Grid container xs={12} sm={6}>
            <Grid item xs={12} className="control-group">
          <p className="blahblah">You wanna create campaign parameters to URL but provided <a href="https://ga-dev-tools.appspot.com/campaign-url-builder/">tool by Google</a> only allow one parameter value at a time? Here comes this tool! Put it as many values for each parameter as you want, and copy them all with just a click.</p>
            </Grid>
          </Grid>
        </Grid>
        <UTMInputs
          options={this.state.utm_options}
          values={this.state.utm_values}
          onChange={this.handleChange} 
          onCreateOption={this.handleCreate}
          handleInput={this.handleInput}
          generateText={this.generateTextValues} />
        <div className="spacer"></div>
        <div>
          <p>For feedback/request, please create an issue in this <a href="https://github.com/peeomid/bulk-utm-generator">repo</a> or dm me on <a href="https://twitter.com/peeomid">Twitter</a> </p>
        </div>
        <UTMTable
          values={this.state.utm_values}
          generateValues={this.generateValues}/>
      </div>
    )
  }
}

export default UTMBuilder
