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
  Textarea,
} from "@chakra-ui/react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      console.log(res.data);
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
        Dados do Candidato
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
            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                <Heading as="h2" size="lg">
                  Pessoal
                </Heading>
              </AbsoluteCenter>
            </Box>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">
                  Nome Completo do Candidato:
                </FormLabel>
                <Input id="nome" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nomeMae">Nome Completo da Mãe:</FormLabel>
                <Input id="nomeMae" />
              </Box>
            </HStack>
            <HStack>
              <Box w="100%">
                <FormLabel htmlFor="nomePai">Nome Completo do Pai:</FormLabel>
                <Input id="nomePai" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="grauInstrucao">Grau de Instrução</FormLabel>
                <Select placeholder="Selecionar">
                  <option>Médio</option>
                  <option>Superior</option>
                  <option>Pós-graduação</option>
                  <option>Mestrado</option>
                  <option>Doutorado</option>
                  <Input id="grauInstrucao" />
                </Select>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="racaCor">Raça/Cor</FormLabel>
                <Select placeholder="Selecionar">
                  <option>Branco</option>
                  <option>Preto</option>
                  <option>Pardo</option>
                  <option>Indígena</option>
                  <option>Amarelo</option>
                  <Input id="racaCor" />
                </Select>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="sexo">Sexo</FormLabel>
                <Select placeholder="Selecionar">
                  <option>Masculino</option>
                  <option>Feminino</option>
                  <option>Prefiro não dizer</option>
                  <Input id="sexo" />
                </Select>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="estadoCivil">Estado Civil</FormLabel>
                <Select placeholder="Selecionar">
                  <option>Solteiro</option>
                  <option>Casado</option>
                  <option>Separado</option>
                  <option>Divorciado</option>
                  <option>Viúvo</option>
                  <Input id="estadoCivil" />
                </Select>
              </Box>
            </HStack>
            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                <Heading as="h2" size="lg">
                  Nascimento
                </Heading>
              </AbsoluteCenter>
            </Box>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="dataNascimento">
                  Data de Nascimento
                </FormLabel>
                <Input id="dataNascimento" type="date" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="nacionalidade">Nacionalidade</FormLabel>
                <Select placeholder="Selecionar">
                  <option>Brasileiro</option>
                  <option>Canadense</option>
                  <option>Dinamarquês</option>
                  <option>Alemão</option>
                  <option>Chinês</option>
                  <Input id="estadoCivil" />
                </Select>
              </Box>
            </HStack>
            <HStack>
            <Box w="100%">
                <FormLabel htmlFor="paisNascimento">
                  País de Nascimento
                </FormLabel>
                <Select placeholder="Selecionar">
                  <option>Brasil</option>
                  <option>Canadá</option>
                  <option>Dinamarca</option>
                  <option>Alemanha</option>
                  <option>China</option>
                  <Input id="paisNascimento" />
                </Select>
              </Box>
            </HStack>
            <HStack>
              <Box w="100%">
                <FormLabel htmlFor="estadoNascimento">
                  Estado Nascimento
                </FormLabel>
                <Input id="estadoNascimento" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidadeNascimento">
                  Cidade Nascimento
                </FormLabel>
                <Input id="cidadeNascimento" />
              </Box>
            </HStack>
            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                <Heading as="h2" size="lg">
                  Tamanhos
                </Heading>
              </AbsoluteCenter>
            </Box>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="numeroBota">Número Bota</FormLabel>
                <Input placeholder="Ex: 38" id="numeroBota" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="numeroCalca">Número Calça</FormLabel>
                <Input placeholder="Ex: 41" id="numeroCalca" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="numeroBlusa">Tamanho Blusa</FormLabel>
                <Input placeholder="Ex: G" id="numeroBlusa" />
              </Box>
            </HStack>
            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                <Heading as="h2" size="lg">
                  Contato
                </Heading>
              </AbsoluteCenter>
            </Box>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="telefone">Telefone</FormLabel>
                <Input placeholder="(99) 99999-9999" id="telefone" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="telefone2">Telefone 2</FormLabel>
                <Input placeholder="(99) 99999-9999" id="telefone2" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input placeholder="email@email.com" id="email" />
              </Box>
            </HStack>
            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                <Heading as="h2" size="lg">
                  Endereço
                </Heading>
              </AbsoluteCenter>
            </Box>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cep">CEP</FormLabel>
                <Input placeholder="Ex: 12345678" id="cep" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="pais">País</FormLabel>
                <Input id="pais" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="estado">Estado</FormLabel>
                <Input id="estado" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input id="cidade" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="bairro">Bairro</FormLabel>
                <Input id="bairro" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="tipoLogradouro">
                  Tipo de Logradouro
                </FormLabel>
                <Select placeholder="Selecionar">
                  <option>Avenida</option>
                  <option>Alameda</option>
                  <option>Condomínio</option>
                  <option>Campo</option>
                  <Input id="tipoLogradouro" />
                </Select>
              </Box>
            </HStack>
            <HStack>
              <Box w="100%">
                <FormLabel htmlFor="enderecoResidencial">
                  Endereço Residencial
                </FormLabel>
                <Input id="enderecoResidencial" />
              </Box>
            </HStack>
            <HStack>
              <Box w="100%">
                <FormLabel htmlFor="numero">Número</FormLabel>
                <Input id="numero" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="complemento">Complemento</FormLabel>
                <Input id="complemento" />
              </Box>
            </HStack>
            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                <Heading as="h2" size="lg">
                  Documentos
                </Heading>
              </AbsoluteCenter>
            </Box>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="rg">RG</FormLabel>
                <Input id="rg" type="number" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="orgaoEmissor">Órgão Emissor</FormLabel>
                <Input id="orgaoEmissor" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="estadoEmissor">Estado Emissor</FormLabel>
                <Select placeholder="Selecionar">
                  <option>ES</option>
                  <option>RJ</option>
                  <option>SP</option>
                  <option>MG</option>
                  <Input id="estadoEmissor" />
                </Select>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cidadeEmissora">Cidade Emissora</FormLabel>
                <Select placeholder="Selecionar">
                  <option>Belo Horizonte</option>
                  <option>Rio de Janeiro</option>
                  <option>São Paulo</option>
                  <option>Vitória</option>
                  <Input id="cidadeEmissora" />
                </Select>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="dataExpedicao">Data de Expedição</FormLabel>
                <Input id="cidadeEmissora" type="date" />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cpf">CPF</FormLabel>
                <Input id="cpf" type="number" />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box>
                <FormLabel htmlFor="pisPasep">PIS/PASEP</FormLabel>
                <Input id="pisPasep" type="number" />
              </Box>
            </HStack>

            <Box position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                <Heading as="h2" size="lg">
                  Outros
                </Heading>
              </AbsoluteCenter>
            </Box>

            <HStack spacing="4">
              <Box>
                <FormLabel htmlFor="funcao">Função</FormLabel>
                <Select placeholder="Selecionar">
                  <option>PUXAR DO BANCO DE DADOS</option>
                  <Input id="funcao" /> {/* PUXAR DO BANCO DE DADOS */}
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="alojado">Alojado</FormLabel>
                <Select placeholder="Escolher">
                  <Input id="alojado" />
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="pcd">PCD</FormLabel>
                <Select placeholder="Escolher">
                  <option>Sim</option>
                  <option>Não</option>
                  <Input id="pcd" />
                </Select>
              </Box>
            </HStack>
           
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

export default App;
