import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['score:desc'],
  sortedAnswers: Ember.computed.sort('answersList', 'sortBy'),
  actions: {
    voteAnswer(answer, adjustment) {
      this.sendAction('voteAnswer', answer, adjustment);
    },
    deleteAnswer(answer) {
      if (confirm('You sure you wanna nuke yer answer?')) {
        var question = answer.get('question');
        this.sendAction('deleteAnswer', answer, question);
      }
    }
  }
});
