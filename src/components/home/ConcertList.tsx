import {
  Box, Heading, Image,
  SimpleGrid,
  Text, VStack
} from '@chakra-ui/react';
import Link from 'next/link';

const ConcertCard = ({ concert }) => {

  return (
    <Box className="movie">
      <Link href="">
        <VStack>
          <Link href={`/concerts/${concert.id}`}>
            <a>
              <Image
                boxSize='300px'
                src={concert.cover_image}
              />
              <VStack pt={3}>
                <Heading size='sm' fontSize='23px'>{concert.title}</Heading>
                <Text textStyle="body">{concert.artist}</Text>
              </VStack>
            </a>
          </Link>
        </VStack>

      </Link >

      <style>{`
            .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
            }
            .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
            transform: scale(1.05);
            }
            .movie h4 {
            font-size: 18px;
            text-align: center;
            }
            `}
      </style>
    </Box >
  );
};

const ConcertList = (params) => {
<<<<<<< HEAD

  // console.log(params.fract);

  const fract = params.fract; // 최신순, 인기순 정렬하는 
  const data = params.data;
  const concerts = data.data;
=======
  const [isLargerThan960] = useMediaQuery('(min-width: 960px)');
<<<<<<< HEAD
>>>>>>> 68ade93ab0af8290bc77b3991905b8abf2d4463d
=======
>>>>>>> origin/main

  return (
    <div>
      <SimpleGrid columns={[2, null, 3]} spacing={10} width="full">
        {concerts.length > 0 && (concerts?.map((concert) => (
          <div key={concert.id} >
            <ConcertCard concert={concert} />
          </div>
        )))}
      </SimpleGrid>
    </div>
  );
};

export default ConcertList;
