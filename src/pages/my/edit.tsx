<<<<<<< HEAD
<<<<<<< HEAD
import { Box, Flex, Heading, VStack } from '@chakra-ui/react';
import Footer from '@src/components/home/Footer';
import MenuBar from '@src/components/home/MenuBar';


const Edit = (params) => {
    return (
        <Box>
            <MenuBar />
            <Box mb={30} pb={20}>

                <Flex pt={50} width="full" justifyContent="center">
                    <VStack>
                        <Heading fontWeight="700" size='2xl' my="20px">Edit</Heading>

                    </VStack>
                </Flex>
            </Box>
            <Footer />
        </Box >
    );
};

export default Edit;
=======
=======
>>>>>>> origin/main
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const EditPage = (second) => {
  const router = useRouter();
  return (
    <Box>
      {router.asPath}
      <Text>개인 정보 편집</Text>
    </Box>
  );
};

export default EditPage;
<<<<<<< HEAD
>>>>>>> 68ade93ab0af8290bc77b3991905b8abf2d4463d
=======
>>>>>>> origin/main
