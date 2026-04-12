import "./contacts.scss";

const contacts = [
  {
    label: "GitHub",
    value: "github.com/your-handle",
    href: "https://github.com/your-handle",
  },
  {
    label: "Telegram",
    value: "@your_handle",
    href: "https://t.me/your_handle",
  },
  {
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    label: "X",
    value: "x.com/your-handle",
    href: "https://x.com/your-handle",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-handle",
    href: "https://linkedin.com/in/your-handle",
  },
];

const Contacts: React.FC = () => {
  return (
    <main className="contacts-page">
      <header className="contacts-header">
        <p>Reach out, follow the work, or just keep the links here for later.</p>
      </header>

      <div className="contacts-list">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            className="contact-card"
            href={contact.href}
            target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
          >
            <span className="contact-label">{contact.label}</span>
            <span className="contact-value">{contact.value}</span>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Contacts;
