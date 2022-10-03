var page;

// Describe this function...
function initialize_book() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  page = 1;
  let element_page_num = document.getElementById('page-num');
  element_page_num.innerText = page;
  let element_text = document.getElementById('text');
  element_text.innerText = 'My recipe is instructions how to prepare the best pancakes you tasted. A dish prepared with my love for you';
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", 'https://media4.giphy.com/media/yIETDqAZp2HD2/200w.webp?cid=ecf05e47vgmjfngrs0hjn3xugwch4tcl4j7j5gc6tejs97vt&rid=200w.webp&ct=g');
}

// Describe this function...
function initialize_book2() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  page = 1;
  let element_page_num2 = document.getElementById('page-num');
  element_page_num2.innerText = page;
  let element_text2 = document.getElementById('text');
  element_text2.innerText = 'My recipe is instructions how to prepare the best pancakes you tasted. A dish prepared with my love for you';
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", 'https://media4.giphy.com/media/yIETDqAZp2HD2/200w.webp?cid=ecf05e47vgmjfngrs0hjn3xugwch4tcl4j7j5gc6tejs97vt&rid=200w.webp&ct=g');
}


initialize_book();


document.getElementById('pages-btn').addEventListener('click', (event) => {
  if (page < 8) {
    let element_page_num3 = document.getElementById('page-num');
    page = (typeof page === 'number' ? page : 0) + 1;
    element_page_num3.innerText = page;
  }
  if (page == 2) {
    let element_text3 = document.getElementById('text');
    element_text3.innerText = 'First ingredient is 1 cup all-purpose flour ';
    let element_image3 = document.getElementById('image');
    element_image3.setAttribute("src", 'https://media2.giphy.com/media/4SXULfEtV0O0DvijQy/200w.webp?cid=ecf05e470usa3szan5q9czg7xic6md36dlx0i8d04tyg57i5&rid=200w.webp&ct=g');
  } else if (page == 3) {
    let element_text4 = document.getElementById('text');
    element_text4.innerText = 'You like sugar so 2 tablespoons white sugar ';
    let element_image4 = document.getElementById('image');
    element_image4.setAttribute("src", 'https://media0.giphy.com/media/6bFN1KkQDYJC8/200.webp?cid=ecf05e478xu7b9f38olxl5drj0bqm3cz8bmv5fis1tdm7tlg&rid=200.webp&ct=g');
  } else if (page == 4) {
    let element_text5 = document.getElementById('text');
    element_text5.innerText = 'And 2 teaspoons baking powder ';
    let element_image5 = document.getElementById('image');
    element_image5.setAttribute("src", 'https://media1.giphy.com/media/iqGqruJLj50f6m1ET6/200w.webp?cid=ecf05e47c42szvbur1gflfz5lpihujd1yn5dq8gja1kpin1h&rid=200w.webp&ct=g');
  } else if (page == 5) {
    let element_text6 = document.getElementById('text');
    element_text6.innerText = 'Now add 1 teaspoon salt ';
    let element_image6 = document.getElementById('image');
    element_image6.setAttribute("src", 'https://media4.giphy.com/media/l4Jz3a8jO92crUlWM/200.webp?cid=ecf05e47xq5caj9xr7fy3wbeuwp5gcihauo0d7k004a5vqor&rid=200.webp&ct=g');
  } else if (page == 6) {
    let element_text7 = document.getElementById('text');
    element_text7.innerText = 'From your hen you take 1 egg, beaten ';
    let element_image7 = document.getElementById('image');
    element_image7.setAttribute("src", 'https://media4.giphy.com/media/22KhJEhLekL2E/200.webp?cid=ecf05e47uswssr8y28bub9tgxgkfl1wlf0qslpa9iljr5a09&rid=200.webp&ct=g');
  } else if (page == 7) {
    let element_text8 = document.getElementById('text');
    element_text8.innerText = 'The cow has been milked so 1 cup milk ';
    let element_image8 = document.getElementById('image');
    element_image8.setAttribute("src", 'https://media2.giphy.com/media/QAy9UucK9omP7TcbUp/giphy.webp?cid=ecf05e47pavw2hjyteg2jg9eqamk3aymz1xqeonxb1vwd2fg&rid=giphy.webp&ct=g');
  } else if (page == 8) {
    let element_text9 = document.getElementById('text');
    element_text9.innerText = 'Last ingredient 2 tablespoons vegetable oil ';
    let element_image9 = document.getElementById('image');
    element_image9.setAttribute("src", 'https://media1.giphy.com/media/LgMoQe2uR8IJAkKp4W/200w.webp?cid=ecf05e4712kcqvfaise3mdtzzgsy4gtogjfl2xrudmadza1r&rid=200w.webp&ct=g');
  }

});

document.getElementById('restart-btn').addEventListener('click', (event) => {
  initialize_book();

});