import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    RadioGroup,
    Radio,
    Button,
    Divider,
    Select,
    Heading,
    Text,
    Stack,
    AbsoluteCenter,
    Switch,
    Textarea,
    position,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import NavbarInt from "./NavbarInt";
  import axios from "axios";
  
  function CadastrarReport() {

    const [data, setData] = useState({
        codigoArea:'',
        statusLiberacao:'',
        descricao:'',
        anexos:''
    });

    const valorInput = e => setData({...data, [e.target.id]: e.target.value})

    const sendMsg = (e) => {
        e.preventDefault();
        console.log(`Nome: ${data.codigoArea}`);
        console.log(`Status: ${data.statusLiberacao}`);
        console.log(`Descricao: ${data.descricao}`);
        console.log(`Anexos: ${data.anexos}`);
    }

    return (
      <Box h="100vh">
        <NavbarInt/>
        <Center
          as="header"
          h={150}
          bg="#1e3552"
          color="white"
          fontWeight="bold"
          fontSize="4xl"
          pb="8"
        >
          Bug Report
        </Center>
        <Flex
          align="center"
          justify="center"
          bg="blackAlpha.200"
          h="calc(100vh - 150px)"
        >
          <Center
            w="100%"
            maxW={840}
            bg="white"
            top={100}
            position="absolute"
            borderRadius={5}
            p="6"
            boxShadow="0 1px 2px #ccc"
          >
            <FormControl display="flex" flexDir="column" gap="4"  >
            <Box position="relative" padding="10">
                <Divider />
                <AbsoluteCenter bg="white" px="4">
                  <Heading as="h2" size="lg">
                    Detalhes
                  </Heading>
                </AbsoluteCenter>
              </Box>

              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="codigoArea">Código da Área</FormLabel>
                    <Input id="codigoArea" onChange={valorInput}/>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="statusLiberacao">Status de Liberação</FormLabel>
                  <Select placeholder="Selecionar" id="statusLiberacao" onChange={valorInput}>
                    <option>Sim</option>
                    <option>Não</option>
                  </Select>
                </Box>
              </HStack>
              
              <Textarea placeholder="Descrição da área ou equipamento aqui..." id="descricao" onChange={valorInput}/>
  
              <Box position="relative" padding="10">
                <Divider />
                <AbsoluteCenter bg="white" px="4">
                  <Heading as="h2" size="lg">
                    Anexos
                  </Heading>
                </AbsoluteCenter>
              </Box>
  
              <input type="file" />
              <input type="file" />
              <input type="file" />
  
              <HStack justify="center">
                {/* <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="#1e3552"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "teal.800" }}
                  onClick{sendMsg}
                >
                  Enviar
                </Button> */}

                <button onClick={sendMsg}>Teste</button>
              </HStack>
            </FormControl>
          </Center>
        </Flex>
      </Box>
    );
  }
  
  export default CadastrarReport;
  