// libs
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
// layouts
import Albums from '.';
// mocks
import mockData from '@/mocks/mockApi';
// others
import TestProvider from '@/utils/TestProvider.jsx';

describe('render album list', () => {
  it('should include 5 items', () => {
    // arrange
    const testId = 'album-item';
    const maxLength = 5;
    // act
    render(
      <TestProvider>
        <Albums albums={mockData.albumList[0]} />,
      </TestProvider>,
    );
    // assert
    expect(screen.getAllByTestId(testId)).toHaveLength(maxLength);
  });
  it('should renders correctly', () => {
    // act
    const tree = renderer
      .create(
        <TestProvider>
          <Albums albums={mockData.albumList[0]} />,
        </TestProvider>,
      )
      .toJSON();
    // assert
    expect(tree).toMatchSnapshot();
  });
});
