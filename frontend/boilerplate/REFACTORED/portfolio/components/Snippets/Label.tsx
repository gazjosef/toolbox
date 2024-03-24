interface LabelProps {
  children: string;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  const colorKey: { [key: string]: string } = {
    API: "darkgrey",
    CSS: "blue",
    Express: "yellowgreen",
    HeadlessCMS: "deeppink",
    HTML: "orangered",
    JavaScript: "crimson",
    Liquid: "cornflowerblue",
    MongoDB: "green",
    NextJS: "black",
    Nuxt: "forestgreen",
    Python: "yellow",
    React: "midnightblue",
    Redux: "rebeccapurple",
    RestAPI: "palevioletred",
    SASS: "hotpink",
    Shopify: "forestgreen",
    Tailwind: "deepskyblue",
    Testing: "firebrick",
    TypeScript: "dodgerblue",
    Vite: "rebeccapurple",
    Vue: "mediumseagreen",
    $Paid: "limegreen",
  };

  return <div className={`label label--${colorKey[children]}`}>{children}</div>;
};

export default Label;
