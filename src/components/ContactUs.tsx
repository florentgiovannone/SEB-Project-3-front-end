import React from "react";
import Footer from "./footer";

const ContactUs: React.FC = () => {
  return (<>
    <div className="is-flex is-flex-direction-column py-12 px-6 max-w-4xl mx-auto">
      <div className="is-flex is-flex-direction-column space-y-6">
        <div className="is-flex is-flex-direction-column space-y-6">
          <h2 className="is-size-1 has-text-weight-bold">Contact Us</h2>
          <p className="is-size-5">Got a question or feedback? We'd love to hear from you!</p>
          <p className="is-size-5 m-4">
            Email us at <a className="has-text-link" href="mailto:info@rougewine.com">info@rougewine.com</a>
            or call us at <a className="has-text-link" href="tel:+1234-WINE-567">+1 234-WINE-567</a>.
            If you're nearby, come and visit us for a personalized wine tasting experience.
          </p>
          <div className="columns">
            <div className="column is-one-quarter">
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
            <div className="column is-three-fifths is-flex is-flex-grow-1 is-flex-direction-column gap-4">
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
    </div>
          <Footer/> </>
  );
};

export default ContactUs;