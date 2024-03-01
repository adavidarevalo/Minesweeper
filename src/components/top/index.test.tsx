import { render, screen } from '@testing-library/react';
import Top from '.';

describe('Top Check', () => {
  it('Validate the default props', () => {
    const headerTitle = 'Minesweeper';
    const feature = 'Flag:'
    const firstCmd = 'Ctrl'
    const secondCmd = 'Click'

    render(<Top/>)
    expect(screen.getByText(headerTitle)).toBeInTheDocument();
    expect(screen.getByText(feature)).toBeInTheDocument();
    expect(screen.getByText(firstCmd)).toBeInTheDocument();
    expect(screen.getByText(secondCmd)).toBeInTheDocument();
  });
  it("Validate the Props", () => {
    const headerTitle = 'Test';
    const feature = 'FlagTest:';
    const firstCmd = 'CtrlTest';
    const secondCmd = 'ClickTest';

    const props = {
      headerTitle,
      feature,
      firstCmd,
      secondCmd,
    };

    render(<Top {...props} />);

    expect(screen.getByText(headerTitle)).toBeInTheDocument();
    expect(screen.getByText(feature)).toBeInTheDocument();
    expect(screen.getByText(firstCmd)).toBeInTheDocument();
    expect(screen.getByText(secondCmd)).toBeInTheDocument();
  })
});
