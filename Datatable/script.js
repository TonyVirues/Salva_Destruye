let table = new DataTable('#example');
 
table.on('click', 'tbody tr', function () {
    let data = table.row(this).data();
 
    alert('You clicked on ' + data[0] + "'s row");
});

function eventFired(type) {
    let n = document.querySelector('#demo_info');
    n.innerHTML +=
        '<div>' + type + ' event - ' + new Date().getTime() + '</div>';
    n.scrollTop = n.scrollHeight;
}
 
