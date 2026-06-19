import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.card}>
      <div>
        <p className={css.item}>
          <FaUser />
          {contact.name}
        </p>

        <p className={css.item}>
          <FaPhoneAlt />
          {contact.number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}
