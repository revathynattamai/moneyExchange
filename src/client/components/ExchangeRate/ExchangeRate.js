import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import withErrorBoundary from './errorBoundary';
import CurrencySwiper from './CurrencySwiper';
import styles from './styles';

class ExchangeRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 'usd',
      to: 'usd',
      value: '',
    }
  }

  onFromValChange = (e, currency) => {
    const val = e.target.value;
    this.setState({
      from: currency,
      value: +val,
    });
  }

  componentDidMount = () => {
    const { getCurrencies, getExchangeRates } = this.props;
    getCurrencies();
    getExchangeRates();
    // window.setInterval(getExchangeRates, 1000);
  }

  onFromChangeIndex = i => {
    const { currencies } = this.props;

    this.setState({
      from: Object.keys(currencies)[i],
    });
  }

  onToChangeIndex = i => {
    const { currencies } = this.props;

    this.setState({
      to: Object.keys(currencies)[i],
    });
  }

  onExchange = () => {
    const { exchange } = this.props;
    exchange();
  }

  render() {
    const { currencies, exchangeRate } = this.props;
    if (!currencies || !exchangeRate) return null;

    return <div>
      <CurrencySwiper onChangeIndex={this.onFromChangeIndex} currencies={currencies} onChange={this.onFromValChange} className={'input'} placeholder={0} value={this.state.value} />
      <CurrencySwiper onChangeIndex={this.onToChangeIndex} currencies={currencies} disabled className={'input'} placeholder={0} value={convertedValue(this.state.value, this.state.from, this.state.to, exchangeRate)} />
      <button onClick={this.onExchange}></button>
    </div>
  }
}

export default withErrorBoundary(withStyles(styles)(ExchangeRate));

const convertedValue = (value, fromCurr, toCurr, exchangeRate) => {
  const ratio = exchangeRate[toCurr]/exchangeRate[fromCurr];
  return value*ratio;
}