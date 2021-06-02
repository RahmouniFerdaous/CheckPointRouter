import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ opacity: "0.5" }}
            className="d-block w-100"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/8dc3f88b-a96a-4d8a-af9a-a69e6f3b2506/164edf52-3f4a-48dc-b87c-c7fa09aa66b3/TN-fr-20210524-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Watch Movies</h3>
            <Link to="/movielist">
              <Button variant="success" size="lg">
                {" "}
                Start{" "}
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ opacity: "0.5" }}
            className="d-block w-100"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/8dc3f88b-a96a-4d8a-af9a-a69e6f3b2506/164edf52-3f4a-48dc-b87c-c7fa09aa66b3/TN-fr-20210524-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Download Movies</h3>
            <Link to="/movielist">
              <Button variant="success" size="lg">
                {" "}
                Start{" "}
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ opacity: "0.5" }}
            className="d-block w-100"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/8dc3f88b-a96a-4d8a-af9a-a69e6f3b2506/164edf52-3f4a-48dc-b87c-c7fa09aa66b3/TN-fr-20210524-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Add and Filter Movies</h3>
            <Link to="/movielist">
              <Button variant="success" size="lg">
                {" "}
                Start{" "}
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
