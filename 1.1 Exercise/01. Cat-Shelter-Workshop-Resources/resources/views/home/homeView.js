const {changeViews} = require('./indexHtml');
const {cats} = require('../../content/items');

function showHomeView(request, response){
    const homeView = `
    <main>
        <section class="cats">
            <ul>
                ${cats.map((c) => {
                   const str = `<li>
                    <img src="${c.imageUrl}" alt="Cat">
                    <h3>${c.name}</h3>
                    <p><span>Breed: </span>${c.breed}</p>
                    <p><span>Description: </span>${c.desciption}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="/edit/${c.id}">Change Info</a></li>
                        <li class="btn delete"><a href="/delete/${c.id}">New Home</a></li>
                    </ul>
                </li>`; 
                return str;
                }).join('\n')}
                
            </ul>
        </section>
    </main>`; 

    response.write(changeViews(homeView, 'Home Page')); 
    response.end();
} 

module.exports = {
    showHomeView
}