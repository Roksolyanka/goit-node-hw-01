// !--------------------------------yargs--------------------------------

// const argv = require("yargs").argv;
// const contacts = require("./contacts");

// const invokeAction = async ({ action, id, name, email, phone }) => {
//   switch (action) {
//     case "list":
//       const allContacts = await contacts.listContacts();
//       return console.table(allContacts);
//     case "get":
//       const selectedContact = await contacts.getContactById(id);
//       return console.log(selectedContact);
//     case "add":
//       const newContact = await contacts.addContact({ name, email, phone });
//       return console.log(newContact);
//     case "remove":
//       const deleteContact = await contacts.removeContact(id);
//       return console.log(deleteContact);
//     default:
//       console.log("Unknown action");
//   }
// };

// invokeAction(argv);

// !--------------------------------commander--------------------------------

const { program } = require("commander");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "get":
      const selectedContact = await contacts.getContactById(id);
      return console.log(selectedContact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
    default:
      console.log("Unknown action");
  }
};

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
