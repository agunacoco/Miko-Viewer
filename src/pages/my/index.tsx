<<<<<<< HEAD
<<<<<<< HEAD
import { Box, Flex, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react';
import Footer from '@src/components/home/Footer';
import MenuBar from '@src/components/home/MenuBar';
import { useRouter } from 'next/router';

const myinfo = [
    { name: "name", info: "구나현" },
    { name: "id", info: "agunacoco" },
    { name: "password", info: "111111111" },
    { name: "email", info: "agunaco3994@gmail.com" },
    { name: "phone number", info: "010-8732-3962" },
    { name: "birthday", info: "2001년 4월 16일" },
    { name: "coin", info: "500coin" },
]

const Index = (params) => {

    const router = useRouter();

    return (
        <Box>
            <MenuBar />
            <Box mb={30} pb={20}>
                <Flex pt={50} width="full" justifyContent="center">
                    <VStack>
                        <Heading fontWeight="700" size='2xl' my="20px">my page</Heading>
                        {myinfo.map(({ name, info }) => (
                            <HStack>
                                <Text>{name}</Text>
                                <Input value={info} />
                            </HStack>
                        ))}
                    </VStack>
                </Flex>

            </Box>
            <Footer />
        </Box >
    );
};

export default Index;
=======
=======
>>>>>>> origin/main
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const MyPage = (second) => {
  const router = useRouter();
  return (
    <Box>
      {router.asPath}
      <Text>개인 정보 페이지</Text>
    </Box>
  );
};

export default MyPage;
<<<<<<< HEAD
>>>>>>> 68ade93ab0af8290bc77b3991905b8abf2d4463d
=======
>>>>>>> origin/main
