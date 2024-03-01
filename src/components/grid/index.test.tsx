import { render } from '@testing-library/react';
import Grid from '.';
import { MockFieldData } from './grid.mock';

it('Grid renders correctly', () => {
  const props = {
    onClick: jest.fn(),
    onContextMenu: jest.fn(),
  };

  const { asFragment } = render(<Grid {...props}>{MockFieldData}</Grid>);

  expect(asFragment()).toMatchSnapshot();
});
