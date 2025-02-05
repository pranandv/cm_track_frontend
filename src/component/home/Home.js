const Home = () => {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "0", // Remove any top margin so it doesn’t push the content down
          backgroundColor: "#f0f2f5",
          height: "calc(100vh - 60px)", // Subtract navbar height from the viewport height
          display: "flex", // Use flexbox to center content
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Welcome to MyApp</h1>
          <p>Explore our platform and register or log in.</p>
        </div>
      </div>
    );
  };
  
  export default Home;
  