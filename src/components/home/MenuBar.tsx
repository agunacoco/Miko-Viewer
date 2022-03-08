<<<<<<< HEAD
<<<<<<< HEAD
import { Box, Button, Heading, HStack, Image, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
=======
import { Box, HStack, Text } from '@chakra-ui/react';
import { useUser } from '@src/state/swr/useUser';
>>>>>>> 68ade93ab0af8290bc77b3991905b8abf2d4463d
import Link from 'next/link';
import { FC, Suspense } from 'react';


const MenuLink: FC<{ name: string; url: string }> = ({ name, url }) => {
  return (
<<<<<<< HEAD
    <Box as="li" listStyleType="none" fontSize="18px" fontWeight="bolder" px="10px"  >
      <Link href={url} >
=======
=======
import { Box, HStack, Text } from '@chakra-ui/react';
import { useUser } from '@src/state/swr/useUser';
import Link from 'next/link';
import { FC, Suspense } from 'react';

const MenuLink: FC<{ name: string; url: string }> = ({ name, url }) => {
  return (
>>>>>>> origin/main
    <Box
      as="li"
      listStyleType="none"
      fontSize="24px"
      fontWeight="bold"
      px="20px"
    >
      <Link href={url}>
>>>>>>> 68ade93ab0af8290bc77b3991905b8abf2d4463d
        <a>{name}</a>
      </Link>
    </Box>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
const linkList = [
  { name: 'ご利用ガイド', url: '/' },
  { name: 'チケットリスト', url: '/concerts' },
  { name: 'お知らせ', url: '/' },
];
=======
=======
>>>>>>> origin/main
const UserData = () => {
  const { data } = useUser();

  return (
    <Box>
      {data ? (
        <Text>{data.email}</Text>
      ) : (
        <MenuLink name="로그인" url="/login" />
      )}
    </Box>
  );
};
<<<<<<< HEAD
>>>>>>> 68ade93ab0af8290bc77b3991905b8abf2d4463d
=======
>>>>>>> origin/main

const MenuBar = (params) => {
  const devList = [{ name: '챗팅', url: '/live/viewing' }];

  const linkList = [
    { name: '콘서트 검색', url: '/concerts' },
    { name: '이용자', url: '/my' },
    // { name: '로그인', url: '/login' },
    ...devList,
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Box px={10} as="header" position="sticky" top="0" backgroundColor="white" boxShadow="rgb(240 240 240) 0px -1px 0px inset"  >
      <HStack align="center" justifyContent="center" as="ul" width="full" padding="10px" >
        <Link href="/home">
          <a><Heading as="h3" size='2xl'  >LOGO</Heading></a>
        </Link>
        {linkList.map(({ name, url }) => (
          <MenuLink key={name} name={name} url={url} />
        ))}
        <Button colorScheme='teal' size='md'>Login</Button>


        <Menu>
          <MenuButton borderRadius='full' boxSize='70px' as={Button}>
            <Box>
              <Image src='https://bit.ly/dan-abramov' />
            </Box>
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile'>
              <Link href="/my">
                <a>
                  <MenuItem>My Profile</MenuItem>
                </a>
              </Link>
              <Link href="/my/lists/ticket">
                <a>
                  <MenuItem>My Ticket</MenuItem>
                </a>
              </Link>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

=======
    <Box
      as="header"
      position="sticky"
      top="0"
      backgroundColor="white"
      boxShadow="rgb(240 240 240) 0px -1px 0px inset"
    >
      <HStack as="ul" width="full" alignItems="center" padding="20px">
        <Box
          backgroundImage={
            'url(https://static.line-scdn.net/line_live/17d6ec1a9df/img/viewing/logo_viewing_pc_0923.png)'
          }
          backgroundRepeat="no-repeat"
          href="https://viewing.live.line.me"
          width="272px"
          height="60px"
        ></Box>
        {linkList.map(({ name, url }) => (
          <MenuLink key={name} name={name} url={url} />
        ))}
        <Suspense fallback={<Text> 로딩 </Text>}>
          <UserData />
        </Suspense>
>>>>>>> 68ade93ab0af8290bc77b3991905b8abf2d4463d
=======
    <Box
      as="header"
      position="sticky"
      top="0"
      backgroundColor="white"
      boxShadow="rgb(240 240 240) 0px -1px 0px inset"
    >
      <HStack as="ul" width="full" alignItems="center" padding="20px">
        <Box
          backgroundImage={
            'url(https://static.line-scdn.net/line_live/17d6ec1a9df/img/viewing/logo_viewing_pc_0923.png)'
          }
          backgroundRepeat="no-repeat"
          href="https://viewing.live.line.me"
          width="272px"
          height="60px"
        ></Box>
        {linkList.map(({ name, url }) => (
          <MenuLink key={name} name={name} url={url} />
        ))}
        <Suspense fallback={<Text> 로딩 </Text>}>
          <UserData />
        </Suspense>
>>>>>>> origin/main
      </HStack>
    </Box >
  );
};

export default MenuBar;
