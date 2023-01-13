const {changeViews} = require('./home/indexHtml'); 

function addBreed(request, response){
    const html = `
    <form action="#" method="" class="cat-form">
            <h2>Add Cat Breed</h2>
            <label for="breed-name">Breed Name</label>
            <input name="breed" type="text" id="breed-name">
            <button type="submit">Add Breed</button>
    </form>`;
    response.write(changeViews(html, 'Add New Cat')); 
    response.end();
} 

module.exports = {
    addBreed
}