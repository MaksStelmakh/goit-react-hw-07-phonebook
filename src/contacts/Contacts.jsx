import { List } from "./Contacts.styled";
import PropTypes from "prop-types";

export default function Contacts({ contacts, deleteElem }) {
  return (
    <List>
      {contacts &&
        contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <p>
                {contact.name}: <span>{contact.phone}</span>
              </p>
              <button
                type="button"
                onClick={() => deleteElem(contact.id)}
              ></button>
            </li>
          );
        })}
    </List>
  );
}

Contacts.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteElem: PropTypes.func.isRequired,
};
