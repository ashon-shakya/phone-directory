"use strict";
let contacts = [];
let contactId = 0;
function addContact() {
    const nameInput = document.getElementById("name-input");
    const phoneInput = document.getElementById("phone-input");
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    if (name && phone) {
        contacts.push({ id: contactId++, name, phone });
        nameInput.value = "";
        phoneInput.value = "";
        renderContacts();
    }
}
function deleteContact(id) {
    contacts = contacts.filter((contact) => contact.id !== id);
    renderContacts();
}
function renderContacts() {
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";
    contacts.forEach((contact) => {
        const listItem = document.createElement("li");
        const divItem = document.createElement("div");
        divItem.className = "item";
        divItem.innerHTML = `${contact.name}: ${contact.phone}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        deleteButton.onclick = () => deleteContact(contact.id);
        listItem.appendChild(divItem);
        listItem.appendChild(deleteButton);
        contactList.appendChild(listItem);
    });
}
