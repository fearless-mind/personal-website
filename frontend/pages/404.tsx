import { Typography } from '@material-tailwind/react';

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center h-full text-center">
      <div className="my-2">
        <i className="fa-solid fa-4 fa-2xl"></i>
        <i className="fa-solid fa-0 fa-2xl"></i>
        <i className="fa-solid fa-4 fa-2xl"></i>
      </div>
      <Typography variant="paragraph" className="italic">
        Nope.
      </Typography>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: 'Error',
    },
  };
}
