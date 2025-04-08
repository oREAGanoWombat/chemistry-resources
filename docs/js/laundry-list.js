const laundryListDiv = document.getElementById('laundry-div');

const laundryArray = {
    laundryList: [
        {
            content: 'Stylize home page',
            status: 'to-do',
        },
        {
            content: 'Add page footer',
            status: 'to-do',
        },
        {
            content: 'Create js query for updates list',
            status: 'to-do',
        },
        {
            content: 'Create js query for laundry list',
            status: 'done',
        },
        {
            content: 'Start writing thermochemistry resource pages',
            status: 'to-do',
        },
        {
            content: 'Create Organic Chemistry resource page',
            status: 'to-do',
        },
        {
            content: 'Add equation search function',
            status: 'to-do',
        },
        {
            content: 'Add GenChem info page for K & Q',
            status: 'to-do',
        },
        {
            content: 'Add GenChem info page for acid base chemistry',
            status: 'done',
        },
        {
            content: 'Add GenChem info page for bomb calorimetry',
            status: 'done',
        }
    ]
};

const setLaundryList = (arr = laundryArray.laundryList) => {
    // Define order of statuses
    const statusOrder = {
        'in-progress': 0,
        'to-do': 1,
        'done': 2,
    }

    // Sort laundry list items by status
    const sorted = [...arr].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

    // Generate laundry list
    laundryListDiv.innerHTML += sorted.map(({ content , status }) => `
        <li class=${status}>${content}</li>
    `).join("");
};

setLaundryList();