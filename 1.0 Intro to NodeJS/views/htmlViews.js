function changeViews(content, title) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/">Home</a></li> 
            <li><a href="/about">About</a></li> 
            <li><a href="/catalog">Catalog</a></li>
        </ul>
    </nav> 
    ${content}
</body>
</html>
    `;
}

const items = [
    {
        id: 'wasd0001',
        name: 'item1',
        color: 'Red'
    }, 
    {
        id: 'wasd0002',
        name: 'item2',
        color: 'Green'
    }, 
    {
        id: 'wasd0003',
        name: 'item3',
        color: 'Blue'
    }

];

module.exports = {
    changeViews, 
    items
}