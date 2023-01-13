const { changeViews } = require('./home/indexHtml');
const { IncomingForm } = require('formidable');
const { cats } = require('../content/items');

function addCat(request, response) {
    const html = `
    <form action="/cats/addCat" method="POST" class="cat-form" enctype="multipart/form-data">
            <h2>Add Cat</h2>
            <label for="name">Name</label>
            <input name="name" type="text" id="name">
            <label for="description">Description</label>
            <textarea name="description" id="description"></textarea>
            <label for="image">Image</label>
            <input name="upload" type="file" id="image">
            <label for="group">Breed</label>
            <select name="breed" id="group">
                <option value="Lazy Cat">Lazy Cat</option>
				<option value="Sleepy Cat">Sleepy Cat</option>
				<option value="Random Cat">Random Cat</option> 
                <option value="Bombay Cat">Bombay Cat</option>
            </select>
            <button type="submit">Add Cat</button>
    </form>`;

    response.write(changeViews(html, 'Add New Cat'));
    response.end();
}

function createCat(request, response) {
    const form = new IncomingForm(); // from the new Library - packedge, called formidable
    form.parse(request, (error, fields) => {

        const cat = {
            id: 'wasd' + ('0000' + (Math.random() * 9999 | 0)).slice(-4), // generates an uniqe ID
            name: fields.name,
            imageUrl: 'https://http.cat/301',
            breed: fields.breed,
            desciption: fields.description,
        };

        cats.push(cat);

        response.writeHead(301, [ // redirects to homepage or by the given link
            'Location',
            '/'
        ])

        console.log('A new cat was added to the list!');
        response.end();
    });

}

module.exports = {
    addCat,
    createCat
}