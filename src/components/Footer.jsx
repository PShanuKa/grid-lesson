const Footer = () => {
  return (
    <div className="bg-[#0A142F] p-2">
      <div className="bg-red-100 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5">

          <div className="order-2 sm:order-1">
            <h1 className="text-lime-500">Quick Navigation</h1>
            <div>
              <h6>home</h6>
              <h6>About Us</h6>
              <h6>Service</h6>
              <h6>Blog</h6>
              <h6>home</h6>
            </div>
          </div>

          <div className="order-1 sm:order-2">
            <h1 className="text-lime-500">Service</h1>
            <div>
              <h6>home</h6>
              <h6>About Us</h6>
              <h6>Service</h6>
              <h6>Blog</h6>
              <h6>home</h6>
            </div>
          </div>

          <div className="order-3 col-span-2 md:col-span-1">
            <h1 className="text-lime-500">Join with us</h1>
            <div>
              <h6>home</h6>
              <h6>About Us</h6>
              <h6>Service</h6>
              <h6>Blog</h6>
              <h6>home</h6>
            </div>
          </div>

          <div className="order-4">
            <h1 className="text-lime-500">Legal</h1>
            <div>
              <h6>home</h6>
              <h6>About Us</h6>
              <h6>Service</h6>
              <h6>Blog</h6>
              <h6>home</h6>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Footer;
