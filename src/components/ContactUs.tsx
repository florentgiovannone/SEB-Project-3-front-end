import React from "react";
import Footer from "./footer"

function ContactUs() {
  React.useEffect(() => {
    console.log("The Contact Us Page has mounted")
  }, [])
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered m-6 is-1">Contact Us 📬</h1>
          <p className="subtitle has-text-centered is-3 m-6">
            Got a question or feedback? We'd love to hear from you!
          </p>
          <div className="content">
            <p >
              Email us at <strong>info@rougewine.com</strong> or call us at <strong>+1 234-WINE-567</strong>.
              If you're nearby, come and visit us for a personalized wine tasting experience.
            </p>
            <div className="columns">
              <div className="column">
                <div className="content">
                  <p>
                    <strong>Send an Email</strong>
                    <br />
                    <a href="#">info@rougewine.com</a>
                  </p>
                  <p>
                    <strong>Give us a call</strong>
                    <br />
                    <a href="#">+1 234-WINE-567</a>
                  </p>
                  <p>
                    <strong>Visit our cellar</strong>
                    <br />
                    <a href="#">123 Wine Street, Wine City</a>
                  </p>
                </div>
              </div>
              <div className="column is-flex is-flex-grow-1 is-flex-direction-column gap-4">
                <div className="box" style={{ backgroundColor: '#2a2a2a' }}>
                  <form className="is-flex is-flex-grow-1 is-flex-direction-column gap-4">
                    <div className="field">
                      <label className="label has-text-white">Your name</label>
                      <div className="control">
                        <input className="input" type="text" placeholder="Your name" />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label has-text-white">Your email</label>
                      <div className="control">
                        <input className="input" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label has-text-white">Your message</label>
                      <div className="control">
                        <textarea className="textarea" placeholder="Your message"></textarea>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <button className="button is-danger is-link is-fullwidth">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;