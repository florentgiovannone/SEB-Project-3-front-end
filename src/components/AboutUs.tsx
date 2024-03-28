import React from "react";
import Footer from "./footer";

function AboutUs() {
  React.useEffect(() => {
    console.log("The About Us Page has mounted");
  }, []);

  return (
    <>
      <section className="section is-flex is-flex-direction-column is-align-items-center is-justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="container text-center">
          <h1 className="title has-text-centered m-6 is-1">About Us 🍇</h1>
          <p className="subtitle is-3">
            Discover the story behind Rouge Wine.
          </p>
          <div className="content">
            <p>
              At Rouge Wine, the rich world of wines is brought to your screen with finesse by
              Dinul Haque and Florent Giovannone, a duo of design and wine expertise.
            </p>
            <p>
              While Dinul's eye for design transforms your browsing experience,
              Florent's extensive knowledge ensures that only the finest wines make it to your glass.
              Together, they've melded HTML, CSS (Bulma), MongoDB, and TypeScript into
              this seamless platform.
            </p>
            <p>
              We invite you to explore our wine selections within a site themed after the classic
              allure of wine cellars, paired with modern design elements.
            </p>
            <p>👨‍💻 Meet the Team:</p>
            <ul className="list-disc list-inside">
              <li>Florent Giovannone - The Wine Expert & Software Engineer</li>
              <li>Dinul Haque - Software Engineer</li>
            </ul>
            {/* Expanded content starts here */}
            <h2 className="title is-2">Our Philosophy 🌟</h2>
            <p>
              At Rouge Wine, we believe that every bottle tells a story. From the sun-drenched vineyards to the careful craftsmanship of winemakers, each selection on our platform is a testament to the art and science of winemaking. Our philosophy is rooted in the appreciation of this journey, striving to bring the narrative of each vineyard to your home.
            </p>
            <h2 className="title is-2">What Sets Us Apart 🍷</h2>
            <p>
              Thanks to Florent's expert palate and our design-first approach, Rouge Wine offers a curated selection of wines, detailed tasting notes, and a tech-forward experience. We're committed to sustainability and ethical sourcing, working only with producers who share our values.
            </p>
            <h2 className="title is-2">Join Our Community 🥂</h2>
            <p>
              As part of the Rouge Wine family, you're more than just a customer - you're a fellow wine enthusiast. Join our tastings and events, share your discoveries, and be part of a community that celebrates the rich tapestry of wine culture.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;