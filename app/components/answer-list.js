import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['score:desc'],
  sortedAnswers: Ember.computed.sort('answersList', 'sortBy'),
  actions: {
    voteAnswer(answer, adjustment) {
      this.sendAction('voteAnswer', answer, adjustment);
    }
  }
});
