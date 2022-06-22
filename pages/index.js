import Head from "next/head";
import {
  StyledContainer,
  StyledMain,
} from "../components/homeStyles/StyledIndex";
import MainView from "../components/mainView/MainView";

export default function Home(props) {
  console.log(process.env.CLIENT_SECRET_HOST)
  return (
    <StyledContainer>
      <Head>
        <title>Temperature</title>
        <meta
          name="Assignment iot"
          content="Application for my iot device"
        />
      </Head>
      <StyledMain>
        <MainView data={props.data} />
      </StyledMain>
    </StyledContainer>
  );
}

export async function getServerSideProps() {

  
  const response = await fetch(`${process.env.CLIENT_SECRET_HOST}api/data`);
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}
