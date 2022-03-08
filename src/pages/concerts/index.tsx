<<<<<<< HEAD
<<<<<<< HEAD
import { Box, Button, Flex, Heading, HStack, Input, VStack } from '@chakra-ui/react';
import Category from '@src/components/Category';
import ConcertList from '@src/components/home/ConcertList';
import Footer from '@src/components/home/Footer';
import MenuBar from '@src/components/home/MenuBar';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Index = ({ data, category_id }) => {

    const links = data.meta.links;
    // console.log(category_id);

    const router = useRouter();

    const onClickPage = async (url) => {
        const page = url.split('=');
        if (category_id) {
            router.push(`/concerts?category_id=${category_id}&page=${page[1]}`);
        } else {
            router.push(`/concerts?page=${page[1]}`);
        }
    }

    const [searchWord, setSearchWord] = useState('');

    const onChangeSearch = (e) => {
        setSearchWord(e.target.value);
    }
    const onClickSearch = () => {
        // console.log(searchWord);
        // http://localhost:8080/api/concerts?search=f*
        router.push(`/concerts?search=${searchWord}`);
        setSearchWord('');
    }
    const enterKey = (e) => {
        if (window.event.keyCode == 13) {
            onClickSearch();
        }
    }

    return (
        <Box>
            <MenuBar />
            <Box mb={30} pb={20}>
                <Flex pt={50} width="full" justifyContent="center">
                    <VStack>
                        <Heading fontWeight="700" size='2xl' my="20px">Concert List</Heading>
                        <HStack>
                            <Input width='auto' placeholder='Basic usage' name="sWord" value={searchWord} required onChange={onChangeSearch} onKeyUp={enterKey} />
                            <Button id="btn" name='btn' type="submit" onClick={onClickSearch}>Search</Button>
                        </HStack>
                        <Category />
                        <ConcertList data={data} />
                        <HStack>
                            {links.length > 3 && (links?.map((link, key) => (
                                <>
                                    {link.url === null ?
                                        <Button disabled key={key}>{link.label}</Button> : <Button onClick={() => onClickPage(link.url)}>{link.label}</Button>}
                                </>
                            )))}
                        </HStack>
                    </VStack>
                </Flex>
            </Box>
            <Footer />
        </Box >
    );
};

export default Index;

export async function getServerSideProps(context) {
    console.log(context.query);
    const category_id = context.query.category_id;
    const page = context.query.page;
    const search = context.query.search;

    if (category_id && page) {

        const data = await (await fetch(`http://localhost:8080/api/concerts?category_id=${category_id}&page=${page}`)).json();
        return {
            props: {
                data,
                category_id,
            },
        };
    } else if (search && page) {
        const data = await (await fetch(`http://localhost:8080/api/concerts?search=${search}*&page=${page}`)).json();
        return {
            props: {
                data,
            },
        };
    } else if (category_id) {
        const data = await (await fetch(`http://localhost:8080/api/concerts?category_id=${category_id}`)).json();
        return {
            props: {
                data,
                category_id,
            },
        };
    } else if (search) {
        const data = await (await fetch(`http://localhost:8080/api/concerts?search=${search}*`)).json();
        return {
            props: {
                data,

            },
        };
    } else {
        const data = await (await fetch(`http://localhost:8080/api/concerts?page=${page}`)).json();
        return {
            props: {
                data,
            },
        };
    }

}
=======
=======
>>>>>>> origin/main
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const ConcertPage = (second) => {
  const router = useRouter();
  return (
    <Box>
      {router.asPath}
      <Text>콘서트 검색 페이지</Text>
    </Box>
  );
};

export default ConcertPage;
<<<<<<< HEAD
>>>>>>> 68ade93ab0af8290bc77b3991905b8abf2d4463d
=======
>>>>>>> origin/main
