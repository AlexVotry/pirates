exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('pirates').del(),

    knex('pirates').insert({
      name: 'Black Beard',
      poison: 'Rum',
      accessory: 'eyepatch',
      image: 'http://media.psu.com/media/articles/image/blackbeard.jpg' }),

    knex('pirates').insert({
      name: 'Yellow Beard',
      poison: 'Rum',
      accessory: 'peg leg',
      image: 'http://static.tvtropes.org/pmwiki/pub/images/b03b442758d2c6dfb65cb1739285baa2.jpg' }),

    knex('pirates').insert({
      name: 'Captain Hook',
      poison: 'Rum',
      accessory: 'hook',
      image: 'http://vignette4.wikia.nocookie.net/disney/images/9/97/Captain_Hook_Transparent.png/revision/latest?cb=20151220231720' })
  );
};
