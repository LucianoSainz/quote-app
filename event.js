
$('document').ready(function () {
    //Connecing the socket to host and port
    let socket = io.connect('http://loalhost:3000');
    socket.on('welcome', function (data) {

    });

    $('#aquote').click(function () {
        data = $('#qcontent').val()
        console.log(data);
        //Emitting the event and passing the quote to the server
        socket.emit('new', { quote: data })
        $('#qcontent').val('');
    })
})