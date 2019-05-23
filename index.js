$(document).ready(function () {

    var itemSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/ilpert/json/items",
        "method": "GET",
        "dataType": "json"
    }

    $.ajax(itemSettings).done(function (response) {

        var myItem = "";
        $.each(response, function (i, obj) {
            myItem += '<div class="col-lg-4 col-md-6 mb-4">';
            myItem += '<div class="card h-100 '+obj.id+' " id="' + obj.id + '">';
            myItem += '<a href="detail.html?id='+obj.id+'"><img class="card-img-top" src="' + obj.img + '" alt=""></a>';
            myItem += '<div class="card-body">';
            myItem += '<h4 class="card-title"></h4>';
            myItem += '<a href="detail.html?id='+obj.id+'">' + obj.title + '</a>';
            myItem += '</h4>';
            myItem += '<h5>' + obj.price + '</h5>';
            myItem += '<p class="card-text">' + obj.desc + '</p>';
            myItem += '</div>';
            myItem += '<div class="card-footer">';
            myItem += '<small class="text-muted">'+obj.brand+'</small>';
            myItem += '</div>';
            myItem += '</div>';
            myItem += '</div>';
        //    console.log('valore',obj.id)
        });

        $("#listItems").append(myItem);
    });


    var brandSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/ilpert/json/brands",
        "method": "GET",
        "dataType": "json"
    }

    $.ajax(brandSettings).done(function (response) {

        var myBbrand = "";
        $.each(response, function (i, val) {
            console.log(val)

            myBbrand += ' <a href="#" class="list-group-item">' + val.brand + '</a>';


        });

        $("#listGroup").append(myBbrand);



        console.log(response);
    });





});
