import { useState } from 'react'
import { Button } from '@chakra-ui/react'

export interface resetBtnProps {
  onReset: () => void
}

export default function ResetBtn({ onReset }: resetBtnProps) {
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <Button
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onClick={onReset}
    >
      {mouseDown ? '😞' : '🙂'}
    </Button>
  );
}
