import "./App.css";
//components
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList.container";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <>
      <Container className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts:</h2>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}

export default App;
