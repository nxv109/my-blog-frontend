import Blogs from './blogs';

export default function Index(props: any) {
  return <Blogs {...props} />;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/blogs',
      permanent: false,
    },
  };
};
