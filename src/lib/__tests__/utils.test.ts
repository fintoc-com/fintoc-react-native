import { describe, expect, test } from 'vitest';
import { buildQueryString } from '../utils';

describe('utils', () => {
  describe('buildQueryString', () => {
    describe('when config has string properties only', () => {
      const simpleOptions = {
        country: 'cl',
        holder_type: 'individual',
        product: 'payments',
        public_key: 'pk_live_XXX',
        username: '11111111-1',
        widget_token: 'pi_XXX',
      };
      const simpleQueryString = 'country=cl&holder_type=individual&product=payments&public_key=pk_live_XXX&username=11111111-1&widget_token=pi_XXX';
      test('parses the query string correctly', () => {
        expect(buildQueryString(simpleOptions)).toEqual(simpleQueryString);
      });
    });

    describe('when config has nested object properties', () => {
      const nestedOptions = {
        country: 'cl',
        holder_type: 'individual',
        product: 'payments',
        public_key: 'pk_live_XXX',
        username: {
          editable: false,
          value: '11111111-1',
        },
        widget_token: 'pi_XXX',
      };
      const nestedQueryString = 'country=cl&holder_type=individual&product=payments&public_key=pk_live_XXX&username[editable]=false&username[value]=11111111-1&widget_token=pi_XXX';
      test('parses the query string correctly', () => {
        expect(buildQueryString(nestedOptions)).toEqual(nestedQueryString);
      });
    });
    describe('when config has array properties', () => {
      const optionsWithArray = {
        country: 'cl',
        arrayOption: ['option1', 'option2', 'option3'],
      };
      const queryStringWithArray = 'country=cl&arrayOption[]=option1&arrayOption[]=option2&arrayOption[]=option3';
      test('parses the query string correctly', () => {
        expect(buildQueryString(optionsWithArray)).toEqual(queryStringWithArray);
      });
    });
    describe('when config has array and nested object properties', () => {
      const optionsWithArray = {
        country: 'cl',
        arrayOption: ['option1', 'option2', 'option3'],
        username: {
          editable: false,
          value: '11111111-1',
        },
      };
      const queryStringWithArray = 'country=cl&arrayOption[]=option1&arrayOption[]=option2&arrayOption[]=option3&username[editable]=false&username[value]=11111111-1';
      test('parses the query string correctly', () => {
        expect(buildQueryString(optionsWithArray)).toEqual(queryStringWithArray);
      });
    });
  });
});
