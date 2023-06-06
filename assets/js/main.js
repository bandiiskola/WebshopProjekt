var eversincedb=0
var glueedb=0
var redlightdb=0
var exeterdb=0
var woddb=0
var tigerdb=0

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
        name: 'Working on Dying LP',
        image: 'bladee-wod',
        price: 9000
    },
    {
        id: 4,
        name: 'Red Light LP',
        image: 'bladee-redlight',
        price: 9000
    },
    {
        id: 5,
        name: 'Exeter LP',
        image: 'bladee-exeter',
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
            eversincedb++
            break
        case 2:
            glueedb++
            break
        case 3:
            redlightdb++
            break
        case 4:
            exeterdb++
            break
        case 5:
            woddb++
            break
        case 6:
            tigerdb++
            break
    }
}