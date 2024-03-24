const storedinformation = localStorage.getItem("userInformation");

if (storedinformation) {
    const information = JSON.parse(storedUserInfo);

    document.getElementById("first-name").textContent = information.firstName;
    document.getElementById("last-name").textContent = information.lastName;
    document.getElementById("country").textContent = information.country;
    document.getElementById("phone-number").textContent = information.phoneNumber;
    document.getElementById("state").textContent = information.state;
    document.getElementById("city").textContent = information.city;
    document.getElementById("address").textContent = information.address;
}else{
    storeinformation();
}


function storeinformation() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const address = prompt("Enter your address:");

    const information = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        address,
    };

    localStorage.setItem("userInformation", JSON.stringify(information));

    document.getElementById("first-name").textContent = information.firstName;
    document.getElementById("last-name").textContent = information.lastName;
    document.getElementById("country").textContent = information.country;
    document.getElementById("phone-number").textContent = information.phoneNumber;
    document.getElementById("state").textContent = information.state;
    document.getElementById("city").textContent = information.city;
    document.getElementById("address").textContent = information.address;
}

