const addButton = document.getElementById('add-button');
const deleteButton = document.getElementById('delete-button');
const toggleButton = document.getElementById('toggle-button');
const newItemInput = document.getElementById('new-item');
const itemsList = document.getElementById('items-list');



const Add = () => {
    const newItemText = newItemInput.value.trim();
    if (newItemText !== '') {
        const newItem = document.createElement('li');
        newItem.innerHTML = `<input type="checkbox"><span>${newItemText}</span>`;
        itemsList.appendChild(newItem);
        newItemInput.value = '';
    }
    console.log(newItemText)
};

const Delete = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.parentElement.remove();
        }
    });
};



addButton.addEventListener('click', () => {
   Add()
});

deleteButton.addEventListener('click', () => {
 Delete()
});

toggleButton.addEventListener('click', () => {
  itemsList.style.display = itemsList.style.display === 'none' ? 'block' : 'none';
});