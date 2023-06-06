// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
  //If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
  for (let i = 0; i < contacts.length; i++)
  {
      if ((contacts[i]["firstName"] === name) && contacts[i].hasOwnProperty(prop) === false)
    {
      return "No such property";
    } 
  }
  for (let i = 0; i < contacts.length; i++)
  {
  //The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact. 
    if ((contacts[i]["firstName"] === name) &&     (contacts[i].hasOwnProperty(prop) === true))
    {
      return contacts[i][prop];
    }
  }
  //If name does not correspond to any contacts then return the string No such contact.
  for (let i = 0; i < contacts.length; i++)
  {
    if (contacts[i]["firstName"] !== name)
    {
      return "No such contact";
    }
  }
  
  }
  
  lookUpProfile("Akira", "likes");