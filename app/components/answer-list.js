import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    voteAnswer(answer, adjustment) {
      this.sendAction('voteAnswer', answer, adjustment);
    }
  }
});
