import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
jest.mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest/async-storage-mock'));

// beforeAll(() => { 
//   jest.mock('@react-native-community/async-storage');
// })
describe('<App />', () => {
  it('has 1 child', () => {
    const tree: any = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
