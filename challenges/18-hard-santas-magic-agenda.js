// Santa Claus has a magic diary 📇 where he keeps the addresses of the children to deliver the presents. The problem: the diary's information is mixed and misformatted. The lines contain a magic phone number, a child's name, and their address, but everything is surrounded by strange characters.
//
//     Santa needs your help to find specific information from the diary. Write a function that, given the diary's content and a phone number, returns the child's name and address.
//
//     Keep in mind that in the diary:
//
//     Phone numbers are formatted as +X-YYY-YYY-YYY (where X is one or two digits, and Y is a digit).
// Each child's name is always between < and >
// The idea is for you to write a function that, given the full phone number or part of it, returns the child's name and address. If it doesn't find anything or there is more than one result, you must return null.
//
//     const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
// Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
// <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`
//
// findInAgenda(agenda, '34-600-123-456')
// // { name: "Juan Perez", address: "Calle Gran Via 12" }
//
// findInAgenda(agenda, '600-987')
// // { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }
//
// findInAgenda(agenda, '111')
// // null
// // Explanation: No results
//
// findInAgenda(agenda, '1')
// // null
// // Explanation: Too many results

/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    const agendaArr = agenda.split('\n');
    let countContacts = 0;
    let currentContact = null;

    for(const contact of agendaArr) {
        if(contact.includes(phone)) {
            currentContact = contact
            countContacts++;
        }
    }

    if(!countContacts || countContacts > 1) return null

    let name = '';
    let address = '';
    let endName = true;
    const currentContactArr = currentContact.split(' ')

    for(const contact of currentContactArr) {
        if(contact.includes('<')) endName = false;
        if(!endName) {
            name += ' ' + contact.replace('<', '').replace('>', '');
            if(contact.includes('>')) endName = true;
            continue;
        }
        if(!contact.includes('+')) address += ' ' + contact;
    }

    return {
        name: name.trim(),
        address: address.trim(),
    };
}