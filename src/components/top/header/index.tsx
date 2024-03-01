import { Heading } from '@chakra-ui/react';

export interface headerProps  {
  headerTitle?: string
}

export default function Header({ headerTitle = 'Minesweeper' }: headerProps) {
  return <Heading>{headerTitle}</Heading>;
}
