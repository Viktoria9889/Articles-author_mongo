const main = document.querySelector('.main');
let result;
let title;
let text;
let author;
let name;


const item =  () => {
  let html = '';


  result.data.forEach((item) => {
      html += ` 
      <div class="div_name">
          <span class="span_name"><span>Автор:</span>${item.author.name}</span>
      </div>
     <div class="div_title">
          <span class="span_title">${item.title}</span>
     </div>
      <div class="div_text">
          <span class="span_text">${item.text}</span>
      </div>
      `;
  });
  main.innerHTML = html;
}


const titles = async () => {
    try {
        result = await axios.post('/view', { title: title, text: text,  author: ['name'] })
        console.log('result:', result)
        item();
      } catch (error) {
        console.error(error);
      }
}

titles()















/*
let title = document.querySelector('.title');
let text = document.querySelector('.text');
let name = document/querySelector('.name');
let last = document.querySelector('.btn_last');
let next = document.querySelector('.btn_next');


let arrTitles = [];
let n = 0;

const render = () => {
  title.innerHTML = arrTitles[n].title;
  text.innerHTML = arrTitles[n].text;
  name.innerHTML = arrTitles[n].author;
};


const getArticles = async () => {
  const result = await axios.post('/view', { title: arrTitles[n], text: arrTitles[n], author: arrTitles[n] });
  arrTitles = result.data.slice();
  render();
};

getArticles();


last.addEventListener('click', () => {
  n = n - 1;
  if (n < 0) n = arrTitles.length - 1;
  render();
}
);


next.addEventListener('click', () => {
  n = n + 1;
  if (n > arrTitles.length - 1) n = 0;
  render();
}); 
*/