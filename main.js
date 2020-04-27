
$('document').ready(function () {
    //Connectig the socket to host and port
    let socket = io.cconnect('http://localhost:3000');
    //test event
    //User can skip it.
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });

    //Test event ends here
    //Main event "next"
    socket.on('next', function (data) {
        console.log(data);
        $('#quotes').append("<blockquote>" + data.data.quote + "</blockquote>")
    })
    //Event ends
});
