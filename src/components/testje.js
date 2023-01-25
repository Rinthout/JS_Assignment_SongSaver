const songs = [
    {
        title: "A_Test_title",
        artist: "Bon Jovi",
        genre: "Test_genre1",
        rating: "2",
    },
    {
        title: "B_Test_title",
        artist: "Abba",
        genre: "Test_genre2",
        rating: "3",
    },
    {
        title: "C_Test_title",
        artist: "Queen",
        genre: "Test_genre3",
        rating: "1",
    }
]

function alphabetical(a, b) {
    const artistA = a.artist.toUpperCase();
    const artistB = b.artist.toUpperCase();

    let comparison = 0;
    if (artistA > artistB) {
      comparison = 1;
    } else if (artistA < artistB) {
      comparison = -1;
    }
    return comparison;
}

console.log("Op alfabetische volgorde: ", songs.sort(alphabetical));


function ratingOrder(a, b) {
    if (a.rating > b.rating) return 1;
    if (b.rating > a.rating) return -1;

    return 0;
}

console.log("Op rating volgorde: ", songs.sort(ratingOrder));
