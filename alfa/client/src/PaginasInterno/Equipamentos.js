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
  import axios from "axios";
  
  function CadastrarReport() {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    useEffect(() => {
      axios.get("http://localhost:3000/").then((res) => {
        console.log(res.data);
      });
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }, []);
  
    return (
      <Box h="100vh">
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
            <FormControl display="flex" flexDir="column" gap="4">
              {/*}
              <FormControl display='flex' alignItems='center'>
                  <FormLabel htmlFor='email-alerts' mb='0'>
                      Feedback anônimo?
                  </FormLabel>
                  <Switch id='email-alerts' />
              </FormControl>
              */}
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
                    <Input id="codigoArea" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="statusLiberacao">Status de Liberação</FormLabel>
                  <Select placeholder="Selecionar">
                    <option>Sim</option>
                    <option>Não</option>
                    <Input id="statusLiberacao" />
                  </Select>
                </Box>
              </HStack>
  
              <Textarea placeholder="Descrição da área ou equipamento aqui..." />
  
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
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="#1e3552"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "teal.800" }}
                >
                  Enviar
                </Button>
              </HStack>
            </FormControl>
          </Center>
        </Flex>
      </Box>
    );
  }
  
  export default CadastrarReport;
  