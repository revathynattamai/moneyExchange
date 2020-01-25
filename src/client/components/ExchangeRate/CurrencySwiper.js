import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const CurrencySwiper = ({ currencies, onChange, onChangeIndex, ...otherProps }) => {

  return <div>
    <SwipeableViews onChangeIndex={onChangeIndex} style={{ height: 50, border: 'solid 1px black' }}>
      {Object.keys(currencies).map((currency, i) => <div key={i}>
        {currency}
        <input type="text" onChange={e => onChange(e, currency)} {...otherProps} />
        {currencies[currency]}
      </div>)}
    </SwipeableViews>
  </div>
};

export default CurrencySwiper;