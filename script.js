document.getElementById('add-item-btn').addEventListener('click', function() {
    const newItem = document.getElementById('new-item').value;
    if (newItem.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = newItem;

    document.getElementById('item-list').appendChild(li);

    document.getElementById('new-item').value = '';
});
