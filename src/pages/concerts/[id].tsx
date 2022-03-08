<<<<<<< HEAD
<<<<<<< HEAD
import { Box, Button, Collapse, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Footer from '@src/components/home/Footer';
import MenuBar from '@src/components/home/MenuBar';
import axios from 'axios';
import React from 'react';

const TicketDate = ({ ticket }) => {

  const concert_start_date = ticket.concert_start_date.split('T');
  const date = concert_start_date[0].split('-');
  const time = concert_start_date[1].split(':', 2);
  // console.log(time);
  const d = new Date(concert_start_date);
  const week = new Array('日', '月', '火', '水', '木', '金', '土');
  const day = week[d.getDay()];

  return (
    <Box textAlign="center" pl="50px">
      <Text textStyle="h6">{date[0]}</Text>
      <Text textStyle="h4" >{date[1]}/{date[2]}</Text>
      <Text textStyle="h6" >({day})</Text>
      <Text textStyle="sub" >{time[0]}:{time[1]}</Text>
    </Box>
  );
};

const TicketDetail = ({ ticket }) => {

  // console.log(ticket);
  const week = new Array('日', '月', '火', '水', '木', '金', '土');

  const start_date = ticket.concert_start_date.split('.', 1);
  const sdate = start_date[0].split('T')[0].split('-');
  const stime = start_date[0].split('T')[1].split(':', 2);
  const sd = new Date(start_date);
  const sday = week[sd.getDay()];

  const end_date = ticket.concert_end_date.split('.', 1);
  const etime = end_date[0].split('T')[1].split(':', 2);

  const archive_end = ticket.archive_end_time.split('.', 1);
  const adate = archive_end[0].split('T')[0].split('-');
  const atime = archive_end[0].split('T')[1].split(':', 2);
  const ad = new Date(start_date);
  const aday = week[ad.getDay()];

  const today = new Date();
  const sale_start_date = new Date(ticket.sale_start_date);
  const sale_end_date = new Date(ticket.sale_end_date);

  return (
    <Box flex="1 1 auto" padding="20px 60px 20px">
      {
        new Date(ticket.sale_start_date) < today ?
          <>
            {sale_start_date < today && today < sale_end_date ?
              <div>
                <Box as="span" backgroundColor="#638dff" borderRadius="2px" fontSize="10px" fontWeight="bold" color="white" >販売中</Box>
              </div> :
              <div>
                <Box as="span" borderRadius="2px" fontSize="10px" fontWeight="bold" >販売終了</Box>
              </div>
            }
            <div>
              <a href="https://viewing.live.line.me/channels/6104428/upcoming/18486965">
                配信チケット
              </a>
            </div>
            <dl>
              <dt>販売期間</dt>
              <dd>{sdate[0]}/{sdate[1]}/{sdate[2]}({sday}) {stime[0]}:{stime[1]} - {etime[0]}:{etime[1]}</dd>
              <dt>アーカイブ視聴期間</dt>
              <dd>{adate[0]}/{adate[1]}/{adate[2]}({aday}) {atime[0]}:{atime[1]} まで</dd>
            </dl>
            <div>
              ※チケット代(3,500円)に別途システム利用料(220円)が必要となります。
            </div>
          </>
          :
          <div>
            <Text m={12}>まだチケット購入期間ではありません。</Text>
          </div>
      }

    </Box >
  );
};

const TicketPrice = ({ ticket }) => {
  console.log(ticket);
  const today = new Date();

  return (
    <>
      {
        new Date(ticket.sale_start_date) < today ?
          <Box display="flex" alignItems="center" pr="40px">
            <div>¥{ticket.price}</div>
            <button>購入</button>
          </Box > :
          <div></div>
      }
    </>
  );
};

const TicketBox = ({ ticket }) => {
  // console.log(ticket);
  const today = new Date();

  return (
    <>
      < HStack as="li" width="full" border="1px solid #efefef" borderRadius="10px" >
        <TicketDate ticket={ticket} />
        <TicketDetail ticket={ticket} />
        <TicketPrice ticket={ticket} />
      </HStack >

    </>

  );
};

const LiveInformation = ({ data }) => {

  const concert = data.data;
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  // console.log(concert);
  const week = new Array('日', '月', '火', '水', '木', '金', '土');
  const start_date = concert.all_concert_start_date.split('T');
  const date = start_date[0].split('T')[0].split('-');
  const d = new Date(start_date);
  const day = week[d.getDay()];

  return (
    <Box >
      <Heading fontWeight="800" my="10px">{concert.title}</Heading>
      <HStack justifyContent="center" >
        <Box w="400px" mb="20px">
          <img
            src={concert.cover_image}
            srcSet={concert.cover_image}
            alt="ディズニー・オン・クラシック ～まほうの夜の音楽会 2021"
          />
        </Box>
        <Box w="800px" mr="20px">
          <div>
            <div>{concert.artist}</div>
            <div>{date[0]}/{date[1]}/{date[2]} ({day})</div>
            <div>공연시간 150분</div>
            <div>
              <Collapse startingHeight={20} in={show}>
                {concert.detail}
              </Collapse>
              <Button size='sm' onClick={handleToggle} mt='1rem'>
                Show {show ? 'Less' : 'More'}
              </Button>

            </div>
          </div>
        </Box>
      </HStack>
    </Box >

  );
};

const LiveDetailPage = ({ concert, tickets }) => {

  // console.log(tickets);

  const ticket_data = tickets.data;

  return (
    <Box>
      <MenuBar></MenuBar>
      {/* <HStack justifyContent="space-between" py="40px" px="20px">
      </HStack> */}
      <Box py="50px" px="40px" width="1250px">
        <LiveInformation data={concert} />
        <VStack width="full" alignItems="flex-start">
          <Text as="h2" textStyle="h3" mt="50px" mb="10px" >チケット一覧</Text>
          {ticket_data.length > 0 && (ticket_data?.map((ticket) => (
            <>
              <div key={ticket.id}>
                <TicketBox ticket={ticket} />
              </div>
            </>
          )))}
        </VStack>
      </Box>
      <Footer></Footer>
    </ Box >
  );
};

LiveDetailPage.getInitialProps = async (context) => {
  const { id } = context.query;
  const { data: concert } = await axios.get(
    `http://localhost:8080/api/concerts/${id}`
  );
  const { data: tickets } = await axios.get(
    `http://localhost:8080/api/tickets?filter=concert_id%3A${id}`
  )
  return { concert, tickets };
};

export default LiveDetailPage;
=======
=======
>>>>>>> origin/main
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const ConcertDetailPage = (second) => {
  const router = useRouter();
  return (
    <Box>
      {router.asPath}
      <Text>콘서트 상세 정보</Text>
    </Box>
  );
};

export default ConcertDetailPage;
<<<<<<< HEAD
>>>>>>> 68ade93ab0af8290bc77b3991905b8abf2d4463d
=======
>>>>>>> origin/main
