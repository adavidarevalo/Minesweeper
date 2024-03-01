import { render, screen } from '@testing-library/react';
import Legend from '.';

describe('Legend Check', () => {
  it('Validate the default props', () => {
    render(<Legend />);
    expect(screen.getByText('Flag:')).toBeInTheDocument();
    expect(screen.getByText('Ctrl')).toBeInTheDocument();
    expect(screen.getByText('Click')).toBeInTheDocument();
  });
  it('Validate the props', () => {
    const feature = 'TestFeature';
    const firstCmd = 'CtrlTest';
    const secondCmd = 'ClickTest';
    render(
      <Legend feature={feature} firstCmd={firstCmd} secondCmd={secondCmd} />,
    );

    expect(screen.getByText(feature)).toBeInTheDocument();
    expect(screen.getByText(firstCmd)).toBeInTheDocument();
    expect(screen.getByText(secondCmd)).toBeInTheDocument();
  });
});
