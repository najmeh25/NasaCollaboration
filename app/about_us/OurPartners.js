import "./OurPartners.css";
const OurPartners = () => {
  const partners = [
    "/business_partners/CBC_Logo_White.png",
    "/business_partners/Microsoft-Logo-white.png",
    "/business_partners/QueensLogo_white.png",
    "/business_partners/alphabet-logo.png",
    "/business_partners/amazon_logo.png",
    "/business_partners/nyu-logo.png",
    "/business_partners/samsung-logo.png",
    "/business_partners/sodexo-logo.png",
  ];
  return (
    <section className="partners-section">
      <h2>OurPartners</h2>
      <div className="partners-container">
        <h2>
          We collaborate with progressive, ambitious brands we believe in.
        </h2>
        <div className="partner-grid">
          {partners.map((logo, index) => (
            <img className="partner-img" src={logo} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurPartners;