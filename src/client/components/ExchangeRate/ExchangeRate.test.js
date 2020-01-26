import React from 'react';
import ExchangeRate from './ExchangeRate';
import renderer from 'react-test-renderer';

describe('ExhcangeRate', () => {
  test('renders nothing if exchangeRate and currencies are null', () => {
    const props = {
      exchangeRate: null,
      currencies: null,
      getCurrencies: jest.fn(),
      getExchangeRates: jest.fn(),
    }
    const tree = renderer
      .create(<ExchangeRate {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders nothing if exchangeRate and currencies are null', () => {
    const props = {
      exchangeRate: {
        usd: 1,
        gbp: 2,
      },
      currencies: {
        usd: 10,
        gbp: 10,
      },
      getCurrencies: jest.fn(),
      getExchangeRates: jest.fn(),
    }
    const tree = renderer
      .create(<ExchangeRate {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
