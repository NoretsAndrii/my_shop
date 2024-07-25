import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  return (
    <div className={css.wrapper}>
      <a
        className={css.link}
        href="http://www.linkedin.com/in/andrii-norets"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <a
        className={css.link}
        href="https://t.me/noretsandrei"
        target="_blank"
        rel="noopener noreferrer"
      >
        Telegram
      </a>
    </div>
  );
}
