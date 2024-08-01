import { User } from "./Interface/user"

const namesArray = [
    { email: "marina@wiline.com", firstName: "Marina", lastName: "Smith" },
    { email: "kip@wiline.com", firstName: "Kip", lastName: "Johansson" },
    { email: "lorie@wiline.com", firstName: "Lorie", lastName: "Brown" },
    { email: "jasmin@wiline.com", firstName: "Jasmin", lastName: "Smith" },
    { email: "emma@wiline.com", firstName: "Emma", lastName: "Johnson" },
    { email: "elvia@wiline.com", firstName: "Elvia", lastName: "Wiline" },
    { email: "liliana@wiline.com", firstName: "Liliana", lastName: "Brown" },
    { email: "florencio@wiline.com", firstName: "Florencio", lastName: "Peterson" },
    { email: "delores@wiline.com", firstName: "Delores", lastName: "Huntsman" }
];

const phoneNumbersArray = [
        {
        "email": "marina@wiline.com",
        "phoneNumbers": [{
        type: "primary",
        value: "202-555-0105",
        }]
        },
        {
        "email": "kip@wiline.com",
        "phoneNumbers": [{
        type: "primary",
        value: "202-555-0168",
        }]
        },
        {
        "email": "lorie@wiline.com",
        "phoneNumbers": [{
        type: "primary",
        value: "202-555-0162",
        }]
        },
        {
        "email": "jasmin@wiline.com",
        "phoneNumbers": [{
        
        type: "primary",
        value: "202-555-0168",
        }]
        },
        {
        "email": "emma@wiline.com",
        "phoneNumbers": [{
        type: "primary",
        value: "202-555-0187",
        }]
        },
        {
        "email": "elvia@wiline.com",
        "phoneNumbers": [{
        type: "primary",
        value: "202-555-0164",
        }]
        },
        {
        "email": "liliana@wiline.com",
        "phoneNumbers": [{
        type: "primary",
        value: "202-555-0161",
        }]
        },
        {
        "email": "florencio@wiline.com",
        "phoneNumbers": [{
        type: "primary",
        value: "202-555-0127",
        }]
        },
        {
        "email": "delores@wiline.com",
        "phoneNumbers": [{
        type: "primary",
        value: "202-555-0143",
        }]
        }
];

export const userList: User[] = namesArray.map((user, index) => {
    const phoneEntry = phoneNumbersArray.find(p => p.email === user.email);

    return {
        _id: `${index + 1 + "_id"}`,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: phoneEntry?.phoneNumbers[0].value || "",
    };
});

