let product = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

let productname = product.displayedName.displayedName.value
console.log("Название товара : \n" + productname)

let shops = product.stock.stocks[34];

var avaible = Object.keys(shops).filter(s => shops[s] !=0);
console.log("\n Номера магазинов, в которых есть в наличии товар : \n" + avaible);

let max = Object.entries(shops).sort((a, b) => b[1] - a[1])[0];
console.log("\n Наибольшее кол-во товара : " + "\n Номер магазина : " + max[0] + "\n Кол-во товара : " + max[1]);