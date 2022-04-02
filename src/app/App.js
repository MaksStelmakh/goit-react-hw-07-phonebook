import shortid from "shortid";
import ContactForm from "../contactForm/ContactForm";
import Filter from "../filter/Filter";
import Contacts from "../contacts/Contacts";
import { MainSection } from "./App.styled";
import {
  useGetContactByNameQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} from "../redux/contact";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../redux/filterContacts/action";

export default function App() {
  const { data } = useGetContactByNameQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [setContact] = useCreateContactMutation();
  const filtered = useSelector((state) => state.myFilter);
  const dispatch = useDispatch();

  const addNewContact = (name, number) => {
    if (
      data.find((contact) => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };
      setContact(contact);
    }
  };

  const searchMethod = (evt) => {
    dispatch(filter(evt.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filtered.toLowerCase();
    return data.filter((filter) =>
      filter.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <MainSection>
      <ContactForm onSubmit={addNewContact} />
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} change={searchMethod} />
        {data !== undefined && data.length > 0 ? (
          <Contacts
            contacts={getVisibleContacts()}
            deleteElem={deleteContact}
          />
        ) : (
          <h2>Your Phonebook is empty!</h2>
        )}
      </div>
    </MainSection>
  );
}
