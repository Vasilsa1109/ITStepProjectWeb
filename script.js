// let divElement = document.createElement('div');
// let otherDiv = document.createElement('div');
// divElement.innerHTML = 'Parent';
// otherDiv.innerHTML = 'Hello, World!';
// document.body.append(divElement);
// divElement.prepend(otherDiv);

// let para = document.createElement("p");
// para.innerText = "This is a paragraph.";
// // Append to body:
// document.body.append(para);

// let div = document.createElement("div");
// document.body.append("Some text");
// document.body.prepend("Headline: ");

// var element = document.createElement('div');
// var element = document.createElement(tagName, [options]);

// let div = document.createElement("div");
// div.className = "foo";

// // our starting state: <div class="foo"></div>
// console.log(div.outerHTML);

// // use the classList API to remove and add classes
// div.classList.remove("foo");
// div.classList.add("anotherclass");

// // <div class="anotherclass"></div>
// console.log(div.outerHTML);

// let divContainer = document.createElement("div");
// let div = document.createElement("div");
// let name1 = document.createElement("h4");
// name1.innerText = "Name of tovar";
// let name2 = document.createElement("h4");
// name2.innerText = "Name of tovar";
// let name3 = document.createElement("h4");
// name3.innerText = "Name of tovar";
// let button = document.createElement("button");
// divContainer.className = "container";
// divContainer.style["background-color"] = "lightgray"; 
// divContainer.style["width"] = "500px"; 
// divContainer.style["height"] = "300px";  
// document.body.style["width"] = "1500px"; 
// document.body.style["height"] = "2000px";  


// divContainer.style.display = "flex";
// divContainer.style.flexDirection = "column";
// divContainer.style.gap = "10px";

// // divContainer.style.justifyContent = "center";
// divContainer.style.alignItems = "center";
// divContainer.style.padding = "20px";
// div.style.display = "flex";
// div.style.gap = "90px";

// div.style["borderBottom"] = "grey solid 1px"
// divContainer.style.justifyContent = "center";


let products = [
    { name: "Телефон", quantity: 5, price: 1000 },
    { name: "Ноутбук", quantity: 3, price: 2000 },
    { name: "Наушники", quantity: 10, price: 100 },
  ];
  
  // Получаем ссылку на таблицу
  let table = document.createElement("table");
  
  // Создаем заголовок таблицы
  let headerRow = document.createElement("tr");
  let headers = ["Название", "Количество", "Цена"];
  headers.forEach(headerText => {
    let header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);
  // headerRow.insertAdjacentHTML("afterend", '<hr>');
  
  // Добавляем строки для каждого товара
  let totalQuantity = 0;
  let totalPrice = 0;

// Добавляем строки для каждого товара
products.forEach(product => {
  const row = document.createElement("tr");

  // Создаем ячейки для каждого свойства товара
  for (const key in product) {
    const cell = document.createElement("td");
    cell.textContent = product[key];

    // При добавлении ячейки "Количество" или "Цена", обновляем соответствующую переменную для подсчета
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
totalPriceCell.textContent = `${totalPrice}`;
totalPriceRow.appendChild(totalPriceCell);

table.appendChild(totalPriceRow);

document.body.appendChild(table);
let button = document.createElement("button");
button.style["width"] = "200px"; 
button.style["height"] = "40px"; 
button.innerText = "Подтвердить заказ";
document.body.appendChild(button);

let m = document.querySelector("table");
let nav = document.querySelector("button");
if(nav){
    nav.addEventListener("click", (e) => {
      let w= document.createElement("div");
      w.className = "container";
      let b1= document.createElement("button");
      let b2= document.createElement("button");
      b1.className = "b1";
      b2.className = "b2";
      w.innerText = "Вы действительно хотите одобрить заказ?";
      b1.innerText = "Одобрить";
      b2.innerText = "Отменить";
      document.body.append(w);
      w.appendChild(b1);
      w.appendChild(b2);
      b1.addEventListener("click", (e) => {
        m.classList.add("pushed");
      });
      b2.addEventListener("click", (e) => {
        m.classList.add("no");
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

// Создаем строку для отображения общего количества товаров и цены
// div.style["background-color"] = "gray"; 
// div.style["width"] = "300px"; 
// div.style["height"] = "140px"; 
// button.style["width"] = "100px"; 
// button.style["height"] = "40px"; 
// button.innerText = "Подтвердить заказ";
// document.body.append(divContainer);
// // document.body.append(list);
// divContainer.appendChild(div);
// div.insertAdjacentHTML("afterend", '<hr>');
// div.appendChild(name1);
// div.appendChild(name2);
// div.appendChild(name3);
// document.body.appendChild(button);