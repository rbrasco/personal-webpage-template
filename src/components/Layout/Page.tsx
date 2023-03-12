import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo} from 'react';

import {homePageMeta} from '../../data/data';
import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<HomepageMeta> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();
  const {uri, path} = homePageMeta;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`${uri}${pathname}`} key="canonical" rel="canonical" />

        <link href={`/${path}/favicon.ico`} rel="icon" sizes="any" />
        <link href={`/${path}/icon.svg`} rel="icon" type="image/svg+xml" />
        <link href={`/${path}/apple-touch-icon.png`} rel="apple-touch-icon" />
        <link href={`/${path}/site.webmanifest`} rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`${uri}${pathname}`} property="og:url" />
        <meta content={`${uri}/favicon.ico`} property="og:image" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={`${uri}/favicon.ico`} property="twitter:image" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
