import React from 'react';
import Navbar from './Navbar';

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoHome, IoConstruct, IoPodium, IoBuild} from 'react-icons/io5';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={'5xl'} py={12}>
        <Navbar/>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt={6}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Candidate-se!
          </Text>
          <Heading>Alfa Engenharia</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Uma empresa que preza pela excelência na execução de ideias e projetos, 
          sendo a melhor solução CUSTOMIZADA para nossos CLIENTES!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }
          >
            <Feature
              icon={<Icon as={IoHome} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Fabricação'}
            />
            <Feature
              icon={<Icon as={IoConstruct} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Montagem'}
            />
            <Feature
              icon={<Icon as={IoPodium} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Compromisso'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://source.unsplash.com/VLPUm5wP5Z0'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
