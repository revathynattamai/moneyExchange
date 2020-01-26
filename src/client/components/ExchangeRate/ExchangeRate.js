import React, { Component } from 'react';
// import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import withErrorBoundary from './ErrorBoundary';
import CurrencySwiper from './CurrencySwiper';
import Button from '@material-ui/core/Button';
import { convertedValue } from '../../utils/helpers';
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
      value: val,
    });
  }

  componentDidMount = () => {
    const { getCurrencies, getExchangeRates } = this.props;
    getCurrencies();
    // eslint-disable-next-line no-magic-numbers
    global.setInterval(getExchangeRates, 1000);
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
    const { exchange, exchangeRate } = this.props;
    exchange({
      fromCurr: this.state.from,
      toCurr: this.state.to,
      fromVal: this.state.value,
      toVal: convertedValue(this.state.value, this.state.from, this.state.to, exchangeRate),
    });
  }

  render() {
    const { currencies, exchangeRate } = this.props;
    if (!currencies || !exchangeRate) return <p style={styles.title}>Loading...</p>;

    return <Container maxWidth="sm" style={styles.main}>
      <p style={styles.title}>Revolut</p>
      <CurrencySwiper
        onChangeIndex={this.onFromChangeIndex}
        currencies={currencies}
        onChange={this.onFromValChange}
        className={'input'} placeholder={'0.00'}
        value={this.state.value} />
      <CurrencySwiper
        onChangeIndex={this.onToChangeIndex}
        currencies={currencies}
        disabled
        className={'input'}
        placeholder={0}
        value={convertedValue(this.state.value, this.state.from, this.state.to, exchangeRate)} />
      <Button variant="contained" color="secondary" onClick={this.onExchange}>Exchange</Button>
      <p>Swipe to see other currencies</p>
    </Container>
  }
}

export default withErrorBoundary(ExchangeRate);
