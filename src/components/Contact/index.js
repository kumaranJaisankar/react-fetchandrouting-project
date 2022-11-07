import './index.css'

const Contact = () => (
  <div className="contact-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
      alt="contact"
      className="contact-img"
    />
    <h1 className="contact-heading">Contact</h1>
    <div>
      <a
        href="https://www.instagram.com/_the_sn_of_god/"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="instagram"
          className="icone-size"
        />
      </a>
      <a
        href="https://wa.me/message/QHOZJZT53PYTC1"
        rel="noreferrer"
        target="_blank"
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
          alt="whatsapp"
          className="icone-size"
        />
      </a>
    </div>
  </div>
)

export default Contact
