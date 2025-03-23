
/*const OurValues = () => {
    // TASK - React 1 week 1
    // Create the "Our Values" section
    // Use the descriptions provided in /app/about_us/README.md
    // Some inspiration ideas found in /data/inspiration_about_us
    return (
      <p> ADD OUR VALUES HERE </p>
    );
  };*/
  import "./OurValues.css";

  const OurValues = () => {
    const values = [
      {
        id: "01",
        title: "Explore the Universe",
        description:
          "We are dedicated to pushing the boundaries of space exploration, making the impossible possible.",
      },
      {
        id: "02",
        title: "Innovation at Heart",
        description:
          "Innovation is in our DNA. We constantly push the envelope to offer cutting-edge technology and experiences.",
      },
      {
        id: "03",
        title: "Sustainable Exploration",
        description:
          "We are committed to ensuring our explorations and technologies have minimal environmental impact.",
      },
      {
        id: "04",
        title: "Creating Global Connections",
        description:
          "We believe space exploration brings people together and fosters global collaboration.",
      },
    ];
    
    return (
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-container">
          <h2 className="values-title">Rules to live by</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-id">{value.id}</span>
                <h1 className="value-title">{value.title} </h1>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default OurValues;

  