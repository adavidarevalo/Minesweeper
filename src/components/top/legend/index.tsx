import { Code, Flex, Text } from '@chakra-ui/react';

export interface legendProps {
  feature?: string;
  firstCmd?: string;
  secondCmd?: string;
}

export default function Legend({
  feature = 'Flag:',
  firstCmd = 'Ctrl',
  secondCmd = 'Click',
}: legendProps) {
  return (
    <Flex align={'center'}>
      <Text fontSize="xl" as={'b'} mr={'4px'}>
        {feature}
      </Text>
      <Code display={'flex'}>
        <Text fontSize="xl" color={'red'} m={'0px'}>
          {firstCmd}
        </Text>
        <Text fontSize="xl" m={'0px'} marginInline={'4px'}>
          +
        </Text>
        <Text fontSize="xl" color={'blue'} m={'0px'}>
          {secondCmd}
        </Text>
      </Code>
    </Flex>
  );
}
