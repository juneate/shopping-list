// item is the variable (object), qty & name are properties ("props")
const formNew = document.getElementById('newItem');
const theList = document.getElementById('shoppinglist');
const catFilter = document.getElementById('filterCategories');


let shoppingList = [
    { qty: 4, name: `Apples`, cat: `fruit` },
    { qty: 5, name: `Bananas`, cat: `fruit`  },
    { qty: 1, name: `Pasta`, cat: `dry`  },
    { qty: 7, name: `Pears`, cat: `fruit`  },
    { qty: 7, name: `Cucumber`, cat: `veg`  },
];

// Print any array
function printList(list = shoppingList) {

    // Check the value of the category filter (radio)
    let filterBy = catFilter.category.value;

    // Pre-filter the list based on radio button that's selected
    if (filterBy != 'all')
        list = list.filter(item => item.cat == filterBy)

    theList.innerHTML = list.map(item => `<li class="${item.cat}">${item.qty} ${item.name}</li>`).join(``);
}

formNew.addEventListener('submit', event => {
    // Prevent the form from submitting (which is its defauly behavior)
    event.preventDefault();

    // Take the value out of the <input> field
    let item = formNew.item.value;

    // Push a new "item" onto the shoppinglist Array
    shoppingList.push({ qty: 1, name: item, cat: false })

    // Clear out the input field (the entire form, actually)
    formNew.reset();

    // Reprint the list
    printList();

});

catFilter.addEventListener('click', event => printList() );



// Initial print of the entire list
printList();
