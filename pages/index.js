import Head from 'next/head';
import Menu from './menu';
import WriteToCloudFirestore from '../components/cloudFirestore/write';
import ReadDataFromCloudFirestore from '../components/cloudFirestore/read'
import { useUser } from '../firebase/useUser';
import router from 'next/router';

export default function Home() {
  const { user, logout } = useUser();
  if (user) {
    return (
      router.push("/voter")
    )
  }

  return (
    <div>

      <Head>
        <title>Like Hunted ❤</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu></Menu>

    </div>
  )
}
