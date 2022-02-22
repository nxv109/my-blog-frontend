import AboutMe from './about-me';

export default function Index(props: any) {
  return <AboutMe {...props} />;
}

// export const getServerSideProps = async () => {
//   return {
//     redirect: {
//       // destination: '/posts',
//       destination: '/about-me',
//       permanent: false,
//     },
//   };
// };
