import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  answer: DS.attr('string'),
  score: DS.attr('number'),
  question: DS.belongsTo('question', { async: true })
});
