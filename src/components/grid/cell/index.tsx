import { CellState, Coords } from '../../../utils/field';
import { Box, Button } from '@chakra-ui/react'
import Lottie from 'react-lottie';
import bombAnimation from "../../../../lotties/bomb.json"
import flagAnimation from '../../../../lotties/flag.json';
import { useState } from 'react';

interface CellProps {
  children: number;
  coords: Coords;
  onClick: (coords: Coords) => void;
  onContextMenu: (coords: Coords) => void;
}

export default function Cell({ children, onClick, coords }: CellProps) {
  const [showBtnContent, setShowBtnContent] = useState(false);

  const handleClick = () => {
    setShowBtnContent(true);
    onClick(coords);
  };

  return (
    <Button p={'6px'} onClick={handleClick} isDisabled={showBtnContent}>
      {showBtnContent && children === CellState.bomb && (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: bombAnimation,
          }}
        />
      )}
      {showBtnContent && children === CellState.mark && (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: flagAnimation,
          }}
        />
      )}
      {showBtnContent && children === CellState.empty && (
        <Box h="full" w="full"></Box>
      )}
      {showBtnContent && children === CellState.weakFlag && (
        <Box h="full" w="full"></Box>
      )}
    </Button>
  );
}


