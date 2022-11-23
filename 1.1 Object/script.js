// /object literal
// let player1 = {
//      username: "Frans",
//      power: 100,
//      items: {
//           milk: 100,
//           cola: 150,
//           burger: 200,
//           water: 50,
//      },
//      consume: function (item) {
//           this.power = this.power + item;
//           return console.log(
//                `Hi, ${this.username}, You get ${item} extra power, after using the item`
//           );
//      },
// };

// let player2 = {
//      username: "Mora",
//      power: 80,
//      items: {
//           milk: 100,
//           cola: 150,
//           burger: 200,
//           water: 50,
//      },
//      consume: function (item) {
//           this.power = this.power + item;
//           return console.log(
//                `Hi, ${this.username}, You get ${item} extra power, after using the item`
//           );
//      },
// };

// /function declaration
// let items = {
//      item1: {
//           name: "Milk",
//           powerUp: 100,
//      },
//      item2: {
//           name: "Burger",
//           powerUp: 150,
//      },
//      item3: {
//           name: "Cola",
//           powerUp: 250,
//      },
//      item4: {
//           name: "Water",
//           powerUp: 50,
//      },
// };

// let milk = items.item1;
// let burger = items.item2;
// let cola = items.item3;
// let water = items.item4;

// function Players(username, power) {
//      let player = {};

//      player.skills = {
//           skill1: {
//                name: "Upper Cut",
//                powerUsed: 20,
//                damage: 150,
//           },
//           skill2: {
//                name: "Punch",
//                powerUsed: 15,
//                damage: 95,
//           },
//           skill3: {
//                name: "Counter Attack",
//                powerUsed: 25,
//                damage: 175,
//           },
//      };

//      player.username = username;
//      player.power = power;

//      //  fungsi nambah power
//      player.consume = function (itemPower, itemName) {
//           player.power += itemPower;
//           return console.log(
//                `Hi, ${this.username}, You get ${itemPower} extra power, after using ${itemName}`
//           );
//      };

//      //  fungsi attack (power berkurang)
//      player.attack = function (powerUsed) {
//           this.power -= powerUsed;
//           return console.log(`You are using ${powerUsed} power`);
//      };
//      return player;
// }

// let frans = Players("Frans", 100);
// let mora = Players("Mora", 80);

// /constructor function

function Players(username, power) {
     this.skills = {
          skill1: {
               name: "Upper Cut",
               powerUsed: 20,
               damage: 150,
          },
          skill2: {
               name: "Punch",
               powerUsed: 15,
               damage: 95,
          },
          skill3: {
               name: "Counter Attack",
               powerUsed: 25,
               damage: 175,
          },
     };

     this.username = username;
     this.power = power;

     //  fungsi nambah power
     this.consume = function (itemPower, itemName) {
          player.power += itemPower;
          return console.log(
               `Hi, ${this.username}, You get ${itemPower} extra power, after using ${itemName}`
          );
     };

     //  fungsi attack (power berkurang)
     this.attack = function (powerUsed) {
          this.power -= powerUsed;
          return console.log(`You are using ${powerUsed} power`);
     };
}

let frans = new Players("Frans", 100);

// interactive documentation

const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");

const textArea1 = document.querySelector(".textarea1");
const textArea2 = document.querySelector(".textarea2");
const textArea3 = document.querySelector(".textarea3");

list1.addEventListener("click", () => {
     textArea1.classList.toggle("hidden");
});

list2.addEventListener("click", () => {
     textArea2.classList.toggle("hidden");
});

list3.addEventListener("click", () => {
     textArea3.classList.toggle("hidden");
});
