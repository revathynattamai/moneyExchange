import { connect } from 'react-redux';

import { getCurrencies, exchange } from '../../data/currencies/currenciesActions';
import { getExchangeRates } from '../../data/exchangeRates/exchangeRatesActions';
import ExchangeRate from './ExchangeRate';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  getCurrencies: data => dispatch(getCurrencies(data)),
  getExchangeRates: data => dispatch(getExchangeRates(data)),
  exchange: data => dispatch(exchange(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRate);