import Posts from './posts';

export default function Index(props: any) {
  return <Posts {...props} />;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/posts',
      permanent: false,
    },
  };
};
