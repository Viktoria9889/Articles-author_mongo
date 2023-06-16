const formEl = document.querySelector('.formTitle');
let title = document.querySelector('.title');
let text = document.querySelector('.text');

const authorsEl = document.querySelector('.authors');
const selectAuthor = document.querySelector('.select');


//формуєм список селект з авторів
const renderAuthorList = async () => {
    let html = '';
    const result = await axios.get('/authors');
    //console.log('result:', result);
    const data = result.data;
    //console.log('data:', data);
    data.forEach((item) => {
        html += `<option value="${item._id}">${item.name}</option>`;
    });
    selectAuthor.innerHTML = html;
}



const addNewArticle = () => {
    if (title.value && selectAuthor.value) {
        const addArticle = () => {
            axios.post('/articles_data', { title: title.value, text: text.value, author: selectAuthor.value })
        }
        addArticle();
    }
}
document.querySelector('.btn').addEventListener('click', () => {
    addNewArticle()
})

document.addEventListener('DOMContentLoaded', () => {
    renderAuthorList();
})
