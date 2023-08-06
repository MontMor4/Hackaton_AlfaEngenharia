import "../App.css";
import Axios from "axios";
import { useState, useEffect, useRef } from "react";
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  Radio,
  Button,
  ButtonGroup,
  Divider,
  Select,
  Heading,
  Text,
  Stack,
  AbsoluteCenter,
} from "@chakra-ui/react";
function CadastroCandidatos() {
  const fileInputRG = useRef(null);
  const fileInputCPF = useRef(null);
  const fileInputCurriculo = useRef(null);
  const fileInputCNH = useRef(null);
  const fileInputReservista = useRef(null);

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const [funcoes, setFuncoes] = useState([]);
  const [userData, setUserData] = useState({
    nomecandidato: "",
    nomemae: "",
    nomepai: "",
    GrauDeInstrucao: "",
    racacor: "",
    sexo: "",
    EstadoCivil: "",
    datanascimentocandidato: "",
    nacionalidade: "",
    paisnascimento: "",
    estadonascimento: "",
    cidadenascimento: "",
    tamanhobotina: "",
    tamanhocalca: "",
    tamanhocamisa: "",
    telefone1: "",
    telefone2: "",
    email: "",
    cep: "",
    paisnascimento: "",
    estado: "",
    cidade: "",
    bairro: "",
    tipologadouro: "",
    enderecoresidencial: "",
    numero: "",
    complementoendereco: "",
    rg: "",
    orgaoemissor: "",
    estadoemissor: "",
    cidadeemissaorg: "",
    dataexpedicao: "",
    cpf: "",
    pispasep: "",
    funcao: "",
    alojado: "",
    pcd: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const [selecionadas, setSelecionadas] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const renderOptions = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return funcoes.slice(startIndex, endIndex).map((funcao) => (
      <div key={funcao.codigo}>
        <input
          type="checkbox"
          id={`funcao-${funcao.codigo}`}
          name="funcao"
          value={funcao.codigo}
          checked={selecionadas.includes(String(funcao.codigo))}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={`funcao-${funcao.codigo}`}>{funcao.descricao}</label>
      </div>
    ));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Função para voltar para a página anterior
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Verifica se há opções suficientes para exibir a próxima página
  const hasNextPage = currentPage * itemsPerPage < funcoes.length;

  // Verifica se é possível voltar para a página anterior
  const hasPrevPage = currentPage > 1;

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelecionadas((prevSelecionadas) => [...prevSelecionadas, value]);
    } else {
      setSelecionadas((prevSelecionadas) =>
        prevSelecionadas.filter((item) => item !== value)
      );
    }
  };

  const handleSubmitFiles = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      if (true) {
        let toBase64;
        const file = event.target.files[0];
        const reader = new FileReader();
        toBase64 = (file) =>
          new Promise((resolve, reject) => {
            reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
          });
        console.log(await toBase64(file));
      }

      // if (fileInputCPF.files[0]) {
      //   const cpfBase64 = await readFileAsBase64(fileInputCPF.files[0]);
      //   formData.append("cpfFile", cpfBase64);
      // }

      // if (fileInputCurriculo.files[0]) {
      //   const curriculoBase64 = await readFileAsBase64(
      //     fileInputCurriculo.files[0]
      //   );
      //   formData.append("curriculoFile", curriculoBase64);
      // }

      // if (fileInputCNH.files[0]) {
      //   const cnhBase64 = await readFileAsBase64(fileInputCNH.files[0]);
      //   formData.append("cnhFile", cnhBase64);
      // }

      // if (fileInputReservista.files[0]) {
      //   const reservistaBase64 = await readFileAsBase64(
      //     fileInputReservista.files[0]
      //   );
      //   formData.append("reservistaFile", reservistaBase64);
      // }

      await Axios.post("http://localhost:3001/upload-files", formData);
      console.log("Files uploaded successfully");
      // Handle the successful file upload, e.g., show a success message to the user
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/cadastrar-candidato", userData)
      .then((response) => {
        console.log("Usuário criado com sucesso");

        // Faça o tratamento adicional necessário após a criação do usuário
      })
      .catch((error) => {
        console.error("Erro ao criar usuário", error);
        // Faça o tratamento de erro necessário
      });
  };

  useEffect(() => {
    // Faz a requisição GET para o servidor backend
    Axios.get("http://localhost:3001/")
      .then((response) => {
        // Atualiza o estado com os dados recebidos do backend
        setFuncoes(response.data);
        //console.log(funcoes);
      })
      .catch((error) => {
        console.log(error);
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
                <FormLabel htmlFor="nomecandidato">
                  Nome Completo do Candidato:
                </FormLabel>
                <Input
                  id="nomecandidato"
                  onChange={handleChange}
                  value={userData.nomecandidato}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nomemae">Nome Completo da Mãe:</FormLabel>
                <Input
                  id="nomemae"
                  onChange={handleChange}
                  value={userData.nomemae}
                />
              </Box>
            </HStack>
            <HStack>
              <Box w="100%">
                <FormLabel htmlFor="nomepai">Nome Completo do Pai:</FormLabel>
                <Input
                  id="nomepai"
                  onChange={handleChange}
                  value={userData.nomepai}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="GrauDeInstrucao">
                  Grau de Instrução
                </FormLabel>
                <Select
                  placeholder="Selecionar"
                  id="GrauDeInstrucao"
                  value={userData.GrauDeInstrucao}
                  onChange={handleChange}
                >
                  <option>Médio</option>
                  <option>Superior</option>
                  <option>Pós-graduação</option>
                  <option>Mestrado</option>
                  <option>Doutorado</option>
                  <Input id="grauInstrucao" />
                </Select>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="racacor">Raça/Cor</FormLabel>
                <Select
                  placeholder="Selecionar"
                  value={userData.racacor}
                  onChange={handleChange}
                  id="racacor"
                >
                  <option>Branco</option>
                  <option>Preto</option>
                  <option>Pardo</option>
                  <option>Indígena</option>
                  <option>Amarelo</option>
                  <Input
                    id="racacor"
                    onChange={handleChange}
                    value={userData.racacor}
                  />
                </Select>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="sexo">Sexo</FormLabel>
                <Select
                  placeholder="Selecionar"
                  value={userData.sexo}
                  onChange={handleChange}
                  id="sexo"
                >
                  <option>Masculino</option>
                  <option>Feminino</option>
                  <option>Prefiro não dizer</option>
                  <Input
                    id="sexo"
                    onChange={handleChange}
                    value={userData.sexo}
                  />
                </Select>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="EstadoCivil">Estado Civil</FormLabel>
                <Select
                  placeholder="Selecionar"
                  value={userData.EstadoCivil}
                  onChange={handleChange}
                  id="EstadoCivil"
                >
                  <option>Solteiro</option>
                  <option>Casado</option>
                  <option>Separado</option>
                  <option>Divorciado</option>
                  <option>Viúvo</option>
                  <Input
                    id="estadoCivil"
                    onChange={handleChange}
                    value={userData.estadoCivil}
                  />
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
                <FormLabel htmlFor="datanascimentocandidato">
                  Data de Nascimento
                </FormLabel>
                <Input
                  id="datanascimentocandidato"
                  type="date"
                  onChange={handleChange}
                  value={userData.datanascimentocandidato}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="nacionalidade">Nacionalidade</FormLabel>
                <Select
                  placeholder="Selecionar"
                  value={userData.nacionalidade}
                  onChange={handleChange}
                  id="nacionalidade"
                >
                  <option>Brasileiro</option>
                  <option>Canadense</option>
                  <option>Dinamarquês</option>
                  <option>Alemão</option>
                  <option>Chinês</option>
                  <Input
                    id="nacionalidade"
                    onChange={handleChange}
                    value={userData.nacionalidade}
                  />
                </Select>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="paisnascimento">
                  País de Nascimento
                </FormLabel>
                <Select
                  placeholder="Selecionar"
                  value={userData.paisnascimento}
                  onChange={handleChange}
                  id="paisnascimento"
                >
                  <option>Brasil</option>
                  <option>Canadá</option>
                  <option>Dinamarca</option>
                  <option>Alemanha</option>
                  <option>China</option>
                  <Input
                    id="paisNascimento"
                    onChange={handleChange}
                    value={userData.paisNascimento}
                  />
                </Select>
              </Box>
            </HStack>
            <HStack>
              <Box w="100%">
                <FormLabel htmlFor="estadonascimento">
                  Estado Nascimento
                </FormLabel>
                <Input
                  id="estadonascimento"
                  onChange={handleChange}
                  value={userData.estadonascimento}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidadenascimento">
                  Cidade Nascimento
                </FormLabel>
                <Input
                  id="cidadenascimento"
                  onChange={handleChange}
                  value={userData.cidadenascimento}
                />
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
                <FormLabel htmlFor="tamanhobotina">Número Bota</FormLabel>
                <Input
                  placeholder="Ex: 38"
                  id="tamanhobotina"
                  onChange={handleChange}
                  value={userData.tamanhobotina}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="tamanhocalca">Número Calça</FormLabel>
                <Input
                  placeholder="Ex: 41"
                  id="tamanhocalca"
                  onChange={handleChange}
                  value={userData.tamanhocalca}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="tamanhocamisa">Tamanho Blusa</FormLabel>
                <Input
                  placeholder="Ex: G"
                  id="tamanhocamisa"
                  onChange={handleChange}
                  value={userData.tamanhocamisa}
                />
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
                <FormLabel htmlFor="telefone1">Telefone</FormLabel>
                <Input
                  placeholder="(99) 99999-9999"
                  id="telefone1"
                  onChange={handleChange}
                  value={userData.telefone1}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="telefone2">Telefone 2</FormLabel>
                <Input
                  placeholder="(99) 99999-9999"
                  id="telefone2"
                  onChange={handleChange}
                  value={userData.telefone2}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  placeholder="email@email.com"
                  id="email"
                  onChange={handleChange}
                  value={userData.email}
                />
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
                <Input
                  placeholder="Ex: 12345678"
                  id="cep"
                  onChange={handleChange}
                  value={userData.cep}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="pais">País</FormLabel>
                <Input
                  id="pais"
                  onChange={handleChange}
                  value={userData.pais}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="estado">Estado</FormLabel>
                <Input
                  id="estado"
                  onChange={handleChange}
                  value={userData.estado}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input
                  id="cidade"
                  onChange={handleChange}
                  value={userData.cidade}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="bairro">Bairro</FormLabel>
                <Input
                  id="bairro"
                  onChange={handleChange}
                  value={userData.bairro}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="tipologadouro">
                  Tipo de Logradouro
                </FormLabel>
                <Select
                  placeholder="Selecionar"
                  value={userData.tipologadouro}
                  onChange={handleChange}
                  id="tipologadouro"
                >
                  <option>Avenida</option>
                  <option>Alameda</option>
                  <option>Condomínio</option>
                  <option>Campo</option>
                  <Input
                    id="tipologadouro"
                    onChange={handleChange}
                    value={userData.tipologadouro}
                  />
                </Select>
              </Box>
            </HStack>
            <HStack>
              <Box w="100%">
                <FormLabel htmlFor="enderecoresidencial">
                  Endereço Residencial
                </FormLabel>
                <Input
                  id="enderecoresidencial"
                  onChange={handleChange}
                  value={userData.enderecoresidencial}
                />
              </Box>
            </HStack>
            <HStack>
              <Box w="100%">
                <FormLabel htmlFor="numero">Número</FormLabel>
                <Input
                  id="numero"
                  onChange={handleChange}
                  value={userData.numero}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="complementoendereco">Complemento</FormLabel>
                <Input
                  id="complementoendereco"
                  onChange={handleChange}
                  value={userData.complementoendereco}
                />
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
                <Input
                  id="rg"
                  type="number"
                  onChange={handleChange}
                  value={userData.rg}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="orgaoemissor">Órgão Emissor</FormLabel>
                <Input
                  id="orgaoemissor"
                  onChange={handleChange}
                  value={userData.orgaoemissor}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="estadoesmissor">Estado Emissor</FormLabel>
                <Select
                  placeholder="Selecionar"
                  value={userData.estadoesmissor}
                  onChange={handleChange}
                  id="estadoesmissor"
                >
                  <option>ES</option>
                  <option>RJ</option>
                  <option>SP</option>
                  <option>MG</option>
                  <Input
                    id="estadoesmissor"
                    onChange={handleChange}
                    value={userData.estadoesmissor}
                  />
                </Select>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cidadeemissaorg">Cidade Emissora</FormLabel>
                <Select
                  placeholder="Selecionar"
                  value={userData.cidadeemissaorg}
                  onChange={handleChange}
                  id="cidadeemissaorg"
                >
                  <option>Belo Horizonte</option>
                  <option>Rio de Janeiro</option>
                  <option>São Paulo</option>
                  <option>Vitória</option>
                  <Input
                    id="cidadeemissaorg"
                    onChange={handleChange}
                    value={userData.cidadeemissaorg}
                  />
                </Select>
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="dataexpedicao">Data de Expedição</FormLabel>
                <Input
                  id="dataexpedicao"
                  type="date"
                  onChange={handleChange}
                  value={userData.dataexpedicao}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cpf">CPF</FormLabel>
                <Input
                  id="cpf"
                  type="number"
                  onChange={handleChange}
                  value={userData.cpf}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box>
                <FormLabel htmlFor="pisPasep">PIS/PASEP</FormLabel>
                <Input
                  id="pisPasep"
                  type="number"
                  onChange={handleChange}
                  value={userData.pisPasep}
                />
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
                <FormLabel htmlFor="funcao">Função Principal</FormLabel>
                <select id="funcao">
                  <option value="">Selecionar</option>
                  {funcoes.map((funcao, index) => (
                    <option key={index} value={funcao.id}>
                      {funcao.descricao}
                    </option>
                  ))}
                </select>
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box>
                <FormLabel htmlFor="funcao">Funções Secundárias</FormLabel>
                {renderOptions()}
                <Button onClick={handlePrevPage} disabled={!hasPrevPage}>
                  Página Anterior
                </Button>
                <Button onClick={handleNextPage} disabled={!hasNextPage}>
                  Próxima Página
                </Button>
              </Box>
            </HStack>
            <HStack>
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

            <label for="fileInputRG">RG:</label>
            <input onChange={handleSubmitFiles} type="file" ref={fileInputRG} />

            <label for="fileInputCPF">CPF:</label>
            <input
              onChange={handleSubmitFiles}
              type="file"
              ref={fileInputCPF}
            />

            <label for="fileInputCurriculo">Currículo:</label>
            <input
              onChange={handleSubmitFiles}
              type="file"
              ref={fileInputCurriculo}
            />

            <label for="fileInputCNH">CNH:</label>
            <input
              onChange={handleSubmitFiles}
              type="file"
              ref={fileInputCNH}
            />

            <label for="fileInputReservista">Certificado de Reservista:</label>
            <input
              onChange={handleSubmitFiles}
              type="file"
              ref={fileInputReservista}
            />

            <Button colorScheme="blue">Button</Button>

            <Divider orientation="horizontal" />
            <HStack justify="center">
              <Button
                onClick={handleSubmit}
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

export default CadastroCandidatos;
