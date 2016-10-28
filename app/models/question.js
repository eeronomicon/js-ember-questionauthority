import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  question: DS.attr('string'),
  notes: DS.attr('string'),
  answers: DS.hasMany('answer', { async: true })
});
