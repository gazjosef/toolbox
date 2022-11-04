import Head from "next/head";

export const Meta = ({
  title,
  keywords,
  description,
}: {
  title: string;
  keywords: string;
  description: string;
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      {/* //* FavIcon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="img/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="img/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="img/favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="img/favicon_io/site.webmanifest" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "COMPLETE POOL CARE",
  keywords: "pool, cleaning, repair, service",
  description: "Complete Pool Care",
};
