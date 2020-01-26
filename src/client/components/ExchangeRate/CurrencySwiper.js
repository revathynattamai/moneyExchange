import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

const CurrencySwiper = ({ currencies, onChange, onChangeIndex, ...otherProps }) => {

  return<SwipeableViews onChangeIndex={onChangeIndex} enableMouseEvents style={styles.paper}>
      {Object.keys(currencies).map((currency, i) => <div style={{padding: 10}}key={i}>
        <span style={{margin: 2, fontSize:20}}>{currency.toLocaleUpperCase()}</span>
        <input type="text" size="8" onChange={e => onChange(e, currency)} {...otherProps} />
        <span style={{margin: 2, fontSize:20}}>{currencies[currency].toFixed(2)}</span>
      </div>)}
    </SwipeableViews>
};

export default CurrencySwiper;