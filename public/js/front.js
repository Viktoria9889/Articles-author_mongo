const formEl = document.querySelector('.form');
let name = document.querySelector('.name');
let surname = document.querySelector('.surname');
let cont = document.querySelector('.cont');

let arrAuthors = [];


const render = async () => {
    let html = '';
    const result = await axios.get('/authors');
    //console.log('result:', result);

    const data = result.data;
    //console.log('data:', data);

    data.forEach((item) => {
        html += `<li class="author">${item.name}</li>`;
    });
    cont.innerHTML = html;
};
render();


const addNewAuthor = () => {
    if(name.value) {
        const addAuthor =() => {
            axios.post('/authors_data', {name:name.value})
        }
        addAuthor();
    }
}
document.querySelector('.button').addEventListener('click', () => {
    addNewAuthor()
})