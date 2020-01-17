import React, { Component } from 'react';
import { render } from 'react-dom';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    from: "",
    to: "",
    value: ""
  }
  this.showOption = this.showOption.bind(this);
  this.setFromMoney = this.setFromMoney.bind(this);
  this.setChangeValue = this.setChangeValue.bind(this);
}

showOption(a) {
    return (<select onChange={e => this.setChangeValue(a, e)}>
      <option value={"gbp"}>GBP</option>
      <option value={"eur"}>EUR</option>
      <option value={"usd"}>USD</option>
      <option value={"inr"}>INR</option>
    </select>
    )
  }

  setChangeValue(a, e){
    this.setState({
      [a]: e.target.value
    })
  }

  setFromMoney(e) {
    this.setState({
      value: e.target.value
    })
  }

  showConvertedValue() {
    return(<div>{this.state.value * 9.99}</div>)
  }
  render() {
    return (<Grid container style={{ flexGrow: 1 }} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Paper style={{ height: 230, width: 200, margin: 20 }}>
            <p>From</p>
            {this.showOption("from")}
            <input type="text" size="4" onChange={e => this.setFromMoney(e)} />
            <p>To:</p>
            {this.showOption("to")}
            {this.showConvertedValue()}
            <br />
          </Paper>
        </Grid>
      </Grid>
    </Grid>)
  }
}

render(<App />, document.getElementById('app'));
