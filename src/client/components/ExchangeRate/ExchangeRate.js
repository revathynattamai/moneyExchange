import React, { Component } from 'react';
import { connect } from 'react-redux';

import SwipeableViews from 'react-swipeable-views';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { convert } from '../../data/inputs/inputActions';
import withErrorBoundary from './errorBoundary';

import { formatMoney } from '../../utils/helpers';

class ExchangeRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTop: 0,
      indexBottom: 1,
    }
  }

  componentDidMount = () => {
    const { getCurrencies, getExchangeRates } = this.props;
    getCurrencies();
    // getExchangeRates();
    // window.setInterval(getExchangeRates, 10000);
  }

  render() {
    const { currencies } = this.props;
    if(!currencies) return null;
    return (<div>
      {Object.keys(currencies).map((a, i) => <SwipeableViews key={i}> {a} </SwipeableViews>)}
      </div>);
  }
}

  export default withErrorBoundary(ExchangeRate);