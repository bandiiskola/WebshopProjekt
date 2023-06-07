var eversincedb=0
var glueedb=0
var redlightdb=0
var exeterdb=0
var woddb=0
var tigerdb=0
var osszdb=0
var vegosszeg=0
var beirkosar=document.getElementById("kosar")

let products = [
    {
        id: 1,
        name: 'Eversince LP',
        image: 'bladee-eversince',
        price: 9000
    },
    {
        id: 2,
        name: 'Gluee LP',
        image: 'bladee-gluee',
        price: 9000
    },
    {
        id: 3,
        name: 'Red Light LP',
        image: 'bladee-redlight',
        price: 9000
    },
    {
        id: 4,
        name: 'Exeter LP',
        image: 'bladee-exeter',
        price: 9000
    },
    {
        id: 5,
        name: 'Working on Dying LP',
        image: 'bladee-wod',
        price: 9000
    },
    {
        id: 6,
        name: 'Tiger LP',
        image: 'thaiboy-tiger',
        price: 9000
    }
];

function kosar(szam)
{
    switch(szam)
    {
        case 1:
            eversincedb=1
            break
        case 2:
            glueedb=1
            break
        case 3:
            redlightdb=1
            break
        case 4:
            exeterdb=1
            break
        case 5:
            woddb=1
            break
        case 6:
            tigerdb=1
            break
    }
    beirkosar.innerHTML="<h5 id='kosar'>Kosár</h5>"
    if(eversincedb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[0].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[0].name+" x1 "+products[0].price+" ft</p>"
    }
    if(glueedb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[1].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[1].name+" x1 "+products[1].price+" ft</p>"
    }
    if(redlightdb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[2].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[2].name+" x1 "+products[2].price+" ft</p>"
    }
    if(exeterdb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[3].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[3].name+" x1 "+products[3].price+" ft</p>"
    }
    if(woddb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[4].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[4].name+" x1 "+products[4].price+" ft</p>"
    }
    if(tigerdb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[5].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[5].name+" x1 "+products[5].price+" ft</p>"
    }
    osszdb=eversincedb+redlightdb+exeterdb+woddb+tigerdb+glueedb
    vegosszeg=osszdb*9000
    if(document.getElementById("utanvet").checked==1){
        vegosszeg+=490
    }
    document.getElementById("vegosszeg").innerHTML="Végösszeg: "+vegosszeg+" ft"

}

function elvesz(szam)
{
    switch(szam)
    {
        case 1:
            eversincedb=0
            break
        case 2:
            glueedb=0
            break
        case 3:
            redlightdb=0
            break
        case 4:
            exeterdb=0
            break
        case 5:
            woddb=0
            break
        case 6:
            tigerdb=0
            break
    }
    beirkosar.innerHTML="<h5 id='kosar'>Kosár</h5>"
    if(eversincedb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[0].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[0].name+" x1 "+products[0].price+" ft</p>"
    }
    if(glueedb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[1].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[1].name+" x1 "+products[1].price+" ft</p>"
    }
    if(redlightdb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[2].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[2].name+" x1 "+products[2].price+" ft</p>"
    }
    if(exeterdb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[3].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[3].name+" x1 "+products[3].price+" ft</p>"
    }
    if(woddb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[4].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[4].name+" x1 "+products[4].price+" ft</p>"
    }
    if(tigerdb==1)
    {
        beirkosar.innerHTML+="<img src='assets/images/"+products[5].image+"-hover.png' class='minikep'>"+"<p class='kosarszoveg'>"+products[5].name+" x1 "+products[5].price+" ft</p>"
    }
    osszdb=eversincedb+redlightdb+exeterdb+woddb+tigerdb+glueedb
    vegosszeg=osszdb*9000
    if(document.getElementById("utanvet").checked==1){
        vegosszeg+=490
    }
    document.getElementById("vegosszeg").innerHTML="Végösszeg: "+vegosszeg+" ft"
    
}

function adatok() {
    var nev = document.getElementById("nev").value
    var isz = document.getElementById("isz").value
    var telepules = document.getElementById("telepules").value
    var utcahaz = document.getElementById("utcahaz").value
    var email = document.getElementById("email").value
    var teloszam = document.getElementById("teloszam").value

    if (document.getElementById("check").checked == 1) {
            document.getElementById("nev1").value = nev
            document.getElementById("isz1").value = isz
            document.getElementById("telepules1").value = telepules
            document.getElementById("utcahaz1").value = utcahaz
    }
    else{
            document.getElementById("nev1").value = ""
            document.getElementById("isz1").value = ""
            document.getElementById("telepules1").value = ""
            document.getElementById("utcahaz1").value = ""
    }
}

function megrendeles()
{
    console.log(nev)
    if(osszdb==0)
    {
        alert("Nincs semmi a kosárban!")
    }
    if(document.getElementById("nev").value!=""&&document.getElementById("isz").value!=""&&document.getElementById("telepules").value!=""&&document.getElementById("utcahaz").value!=""&&document.getElementById("email").value!=""&&document.getElementById("teloszam").value!="")
    {
        alert("Rendelés leadva!")
        location.reload()
    }
    else
    {
        alert("Nincs kitöltve az adat")
    }

}