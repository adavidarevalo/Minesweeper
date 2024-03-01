import { Flex } from '@chakra-ui/react'
import Header, { headerProps } from './header'
import Legend, { legendProps } from './legend'

interface topProps extends headerProps, legendProps {}

export default function Top({ headerTitle, ...rest}: topProps) {
  return (
    <Flex direction={'column'} align={'center'}>
      <Header headerTitle={headerTitle} />
      <Legend {...rest}/>
    </Flex>
  );
}
