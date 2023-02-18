// TODO: require the item: 

async function loadAllItems(){
    // return Item.find({}).lean();
} 

async function getItemByName(name){
    // return Item.find({name}); // returns an array
} 

async function getItemById(id){
    // return Item.findById(id);
} 

async function createItem(payload){
    // Item.create(payload);
} 

async function updateItem(){
    // Item.findById(it).then((itmem) => { ... item.save()});
} 

async function deleteItem(id){
    // Item.findByIdAndDelete(id).then();
} 

module.exports = {
    loadAllItems, 
    getItemById, 
    getItemByName, 
    createItem, 
    updateItem, 
    deleteItem
}