import { Flex } from '@chakra-ui/react'

interface CounterProps {
  count?: string
}

export default function Counter({ count = "0" }: CounterProps) {
  return (
    <Flex
      justify={'center'}
      align={'center'}
      bg="blue.500"
      w={'40px'}
      h={'40px'}
      color={'white'}
      fontWeight={'bold'}
      borderRadius={'0.125rem'}
    >
      {count}
    </Flex>
  );
}
