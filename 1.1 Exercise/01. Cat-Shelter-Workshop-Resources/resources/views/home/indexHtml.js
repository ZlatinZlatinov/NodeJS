function changeViews(content, title) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
    <link rel="stylesheet" href="/site.css">
    <link rel="shortcut icon" type="image/png" href="../../content/images/pawprint.ico" /> 
    <title>${title}</title>
</head>

<body>
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/cats/addBreed">Add Breed</a></li>
                <li><a href="/cats/addCat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
    </header>
    <main>
    ${content}
    </main>
</body>

</html>
    `;
}

module.exports = {
    changeViews
}

