function calculAge() {
    let name = document.getElementById("name").value;
    console.log(name);
    let firstName = document.getElementById("firstName").value;
    console.log(firstName);
    let birthDate = new Date(document.getElementById("birthDate").value);
    let date = new Date();

    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let dateDay = date.getDate();
    let dateMonth = date.getMonth() + 1;
    let dateYear = date.getFullYear();

    let anniversaire = (birthDay === dateDay && birthMonth === dateMonth);

    let diff = date - birthDate;
    console.log(diff);
    let days = parseInt(diff / 1000 / 60 / 60 / 24);
    console.log(days);
    let years = parseInt(days / 365.25);
    console.log(years);

    if (anniversaire && years <= 1) {
        alert("joyeux anniversaire petit " + firstName + " " + name + "pour vos" + years + "an!!!");
    } else if (anniversaire) { //si on met un point ! c 'est si on veux l'inverse//
        alert("joyeux Anniversaire " + firstName + " " + name + " pour vos " + years + " ans!!");
    } else {
        alert("vous avez" + years + "ans");
    }
}