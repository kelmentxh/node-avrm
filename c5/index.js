const db = require('./bootstrap/db');
const produkt = require('./models/produkt');

db.initDB();

produkt.createNew({
        "ime": "Milka so jagodi",
        "proizvoditel": "Mondelez",
        "cena": 80,
        "tezina": 100,
        "parcinja": 1,
    })
    .then(() => {
        return produkt.update("5e42c417d4153936b80ee57e", {
            ime: "Milka so Leshnici"
        });
    })
    .then(() => {
        return produkt.remove("5e42b2851b9cf43f1e788165");
    })
    .then(() => {
        return produkt.readAll()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });