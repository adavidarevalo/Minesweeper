import { Coords, Field } from "@/utils/field";
import {Grid as GridChackra, GridItem} from '@chakra-ui/react';
import Cell from "./cell";

interface GridProps {
  children: Field;
  maxWidth?: string;
  onClick: (coords: Coords) => void;
  onContextMenu: (coords: Coords) => void;
}

export default function Grid({ children, maxWidth = "300px", ...rest }: GridProps) {
  return (
    <GridChackra
      templateColumns={`repeat(${children.length}, 1fr)`}
      gap={2}
      maxW={maxWidth}
    >
      {children.map((row, y) =>
        row.map((cell, x) => (
          <GridItem key={`${y}_${x}_${cell}`}>
            <Cell coords={[y, x]} {...rest}>
              {cell}
            </Cell>
          </GridItem>
        )),
      )}
    </GridChackra>
  );
}
