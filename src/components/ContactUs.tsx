import React from "react"

function ContactUs() {
  React.useEffect(() => {
    console.log("The Contact Us Page has mounted")
  }, [])
  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1">Contact Us 📬</h1>
        <p className="subtitle is-3">
          Got a question or feedback? We'd love to hear from you!
        </p>
        <div className="content">
          <p>
            Email us at <strong>info@rougewine.com</strong> or call us at <strong>+1 234-WINE-567</strong>.
            If you're nearby, come and visit us for a personalized wine tasting experience.
          </p>
          <p>📧 <a href="mailto:info@rougewine.com">Send an Email</a></p>
          <p>📞 Give us a call: +1 234-WINE-567</p>
          <p>📍 Visit our cellar for a tasting session.</p>
        </div>
      </div>
    </section>
  );
};
export default ContactUs