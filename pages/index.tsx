import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"Giuseppe's Portfolio"}</title>
      </Head>
      <header className="p-6 flex-row font-bold text-lg">
          Giuseppe Capasso
      </header>
    </div>
  );
};

export default Home;
