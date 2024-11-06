import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Welcome to Vijay Shankar's portfolio website"
        />
        <meta property="og:title" content="My Portfolio" />
        <meta
          property="og:description"
          content="Welcome to Vijay Shankar's portfolio website"
        />
      </Helmet>
    
    </div>
  );
};

export default Homepage;
