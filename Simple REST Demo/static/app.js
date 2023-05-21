console.log('Hello!');

document.getElementById('load').addEventListener('click', loadItems);
const ul = document.querySelector('ul.listItems');
document.querySelector('form.createForm').addEventListener('submit', createItem);

let editMode = false;
let currID = null;

async function loadItems() {
    ul.textContent = '';
    const response = await fetch('http://localhost:3000/data');

    if (response.ok) {
        const items = await response.json();

        for (let i of items) {
            fillList(i);
        }
    }
}

async function createItem(e) {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;

    if (editMode) {
        const response1 = await fetch(`http://localhost:3000/data/${currID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: itemName, price: itemPrice, id: currID })
        });

        if (response1.ok) {
            loadItems();
            document.getElementById('itemName').value = '';
            document.getElementById('itemPrice').value = '';
            editMode = false;
            currID = null;
            return;
        }
    }

    const response = await fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: itemName, price: itemPrice })
    });


    if (response.status == 201) {
        const newItem = await response.json();
        fillList(newItem);
        itemName.value = '';
        itemPrice.value = '';
    } else {
        itemName.value = 'Whoops, sorry, something went bad xdd';
    }
}

function fillList(i) {
    const li = document.createElement('li');
    li.textContent = `Name: ${i.name} - Price: ${(i.price).toFixed(2)}$`;
    li.id = i.id;

    const editBtn = createNewBtn('Edit', 'editBtn');
    editBtn.addEventListener('click', editItem)
    const deleteBtn = createNewBtn('Delete', 'deleteBtn');
    deleteBtn.addEventListener('click', deleteItem);

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
}

function createNewBtn(name, className) {
    const btn = document.createElement('button');
    btn.className = className;
    btn.textContent = name;
    return btn;
}

async function editItem(e) {
    const li = e.target.parentNode;
    currID = li.id;
    const response = await fetch(`http://localhost:3000/data/${currID}`);

    if (response.status == 200) {
        const item = await response.json();
        document.getElementById('itemName').value = item.name;
        document.getElementById('itemPrice').value = item.price;
    }

    editMode = true;
}

async function deleteItem(e) {
    const li = e.target.parentNode;
    const id = li.id;

    const response = await fetch(`http://localhost:3000/data/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        li.remove();
    }
}