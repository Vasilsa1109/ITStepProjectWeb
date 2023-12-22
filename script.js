
let products = [
    { name: "1. Наушники", quantity: 5, price: 10},
    { name: "2. Lamborgini", quantity: 3, price: 20000 },
    { name: "3. Хлеб", quantity: 10, price: 1 },
  ];

  let table = document.createElement("table");
  
  let headerRow = document.createElement("tr");

  let headers = ["Название", "Количество", "Цена"];

  headers.forEach(headerText => {
    let header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);
  
  let totalQuantity = 0;
  let totalPrice = 0;

products.forEach(product => {
  let row = document.createElement("tr");
  row.style.borderBottom = "solid 1px black";
  for (let key in product) {
    let cell = document.createElement("td");
    cell.textContent = product[key];
    if (key === "quantity") {
      totalQuantity += product[key];
    } else if (key === "price") {
      totalPrice += product[key];
    }
    row.appendChild(cell);
  }

  table.appendChild(row);
});

let totalPriceRow = document.createElement("tr");
let total= document.createElement("td");
total.textContent = `Всего:`;
totalPriceRow.appendChild(total);

 let totalQuantityCell = document.createElement("td");
totalQuantityCell.textContent = `${totalQuantity}`;
totalPriceRow.appendChild(totalQuantityCell);

let totalPriceCell = document.createElement("td");
totalPriceCell.textContent = `${totalPrice} $`;
totalPriceRow.appendChild(totalPriceCell);

table.appendChild(totalPriceRow);

document.body.appendChild(table);
let button = document.createElement("button");
button.innerText = "Подтвердить заказ";
document.body.appendChild(button);

let m = document.querySelector("table");
let nav = document.querySelector("button");

if(nav){
    nav.addEventListener("click", (e) => {
        let fon= document.createElement("div");
      let w= document.createElement("div");
      let h3 = document.createElement("h3");
      fon.className = "fon";
      w.className = "container";
      h3.innerText = "Вы действительно хотите одобрить заказ?";
      let b1= document.createElement("button");
      let b2= document.createElement("button");
      b1.className = "b1";
      b2.className = "b2";
      b1.innerText = "Одобрить";
      b2.innerText = "Отменить";
      document.body.append(fon);
      fon.append(w);
      w.appendChild(h3);
      w.appendChild(b1);
      w.appendChild(b2);
      b1.addEventListener("click", (e) => {
        m.classList.add("pushed");
        fon.classList.add("pushed");
      });
      b2.addEventListener("click", (e) => {
        m.classList.add("no");
        fon.classList.add("pushed");
      });
        // if(confirm("Вы действительно хотите одобрить заказ?")){
        //     m.classList.add("pushed");
        //     nav.classList.add("opened");
        // }
        // else{
        //     m.classList.add("no");
        //     nav.classList.add("no");
        // }
    });
}
