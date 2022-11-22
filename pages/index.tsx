import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="border-2 rounded-sm border-emerald-400 p-4">
        <section className={utilStyles.headingMd}>
          <p className="text-3xl font-bold text-center">Yo. This is a blog.</p>
          <p className='text-xs antialiased text-center'>
            (This is a sample website - you’ll be building a site like this in{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <br />
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {/* <h2 className={utilStyles.headingLg}>Blog</h2> */}
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <div className='bg-emerald-400 px-4 py-1 rounded-sm mt-2'>
                <li className={utilStyles.listItem} key={id}>
                  <Link className='text-yellow-200' href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              </div>
            ))}
          </ul>
        </section>
      </div>
      
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
// import Head from 'next/head';
// import Layout, { siteTitle } from '../components/layout';
// import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';
// import Link from 'next/link';
// import Date from '../components/date';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export default function Home({ allPostsData }) {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Yo.</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>

//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//                 <Link href={`/posts/${id}`}>{title}</Link>
//                 <br />
//                 <small className={utilStyles.lightText}>
//                 <Date dateString={date} />
//                 </small>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }