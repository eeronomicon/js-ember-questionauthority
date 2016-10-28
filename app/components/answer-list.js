import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upVote(answer) {
      this.sendAction('upVote', answer);
    },
    downVote(answer) {
      this.sendAction('downVote', answer);
    }
  }
});
