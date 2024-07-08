import { NextSeo } from 'next-seo';

const SEO = () => {
  return (
    <NextSeo
      title="RetroCoin - The Coolest Memecoin on Solana"
      description="Join the RetroCoin revolution! The coolest memecoin on Solana with funky features and a roadmap to success."
      canonical="https://yourdomain.com"
      openGraph={{
        url: 'https://yourdomain.com',
        title: 'RetroCoin - The Coolest Memecoin on Solana',
        description: 'Join the RetroCoin revolution! The coolest memecoin on Solana with funky features and a roadmap to success.',
        images: [
          {
            url: 'https://yourdomain.com/images/og-image.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        site_name: 'RetroCoin',
      }}
      twitter={{
        handle: '@yourtwitterhandle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default SEO;
