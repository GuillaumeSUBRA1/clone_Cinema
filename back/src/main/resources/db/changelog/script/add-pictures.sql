INSERT INTO picture (id, movie, link, is_cover) VALUES
(1, 1, 'https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg', true),
(2, 2, 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg', true),
(3, 3, 'https://www.citizenkid.com/uploads/medias/cache/post_cover/rc/dOf5fSP4//uploads/medias/21/5d/215da36a9efe4217463b94c8d49e917c1f911fa7.jpg', true),
(4, 4, 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/00/02/16/27/69218096_af.jpg', true),
(5, 5, 'https://fr.web.img5.acsta.net/c_310_420/pictures/21/08/10/12/20/4633954.jpg', true),
(6, 6, 'https://fr.web.img5.acsta.net/c_310_420/pictures/14/09/24/12/08/158828.jpg', true),
(7, 7, 'https://fr.web.img4.acsta.net/c_310_420/pictures/20/01/03/11/20/2257660.jpg', true),
(8, 8, 'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/36/26/41/18737112.jpg',true)
on conflict do nothing;