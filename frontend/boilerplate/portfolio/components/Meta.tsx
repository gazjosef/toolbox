interface MetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const Meta: React.FC<MetaProps> = ({
  title = "Gareth Hind | Web Developer",
  keywords = "", // Your long keywords list here
  description = "", // Your default description here
}) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      {/* Favicon: Accounting Icon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <title>{title}</title>
    </>
  );
};

export default Meta;
