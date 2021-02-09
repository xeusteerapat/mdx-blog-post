import Head from 'next/head';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import Container from '../components/Container';

export default function Home() {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  return (
    <Container>
      <Head>
        <title>Home | Hello, World</title>
      </Head>
      <Stack
        as='main'
        spacing={8}
        justifyContent='center'
        alignItems='flex-start'
        m='0 auto 4rem auto'
        maxWidth='750px'
        px={2}
      >
        <Flex
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          maxWidth='750px'
        >
          <Heading mb={2}>Hi, I'm Teerapat</Heading>
          <Text color={colorSecondary[colorMode]}>
            Nice to meet you all! My Blog are about Node.js, React.js and some
            random stuff. You can read more About me See more in Projects
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
