import Ember from 'ember';

export default Ember.Component.extend({
  displayAnswerForm: false,
  actions: {
    showAnswerForm() {
      this.set('displayAnswerForm', true);
    },
    hideAnswerForm() {
      this.set('displayAnswerForm', false);
    },
    newAnswer() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        question: this.get('questionToAnswer'),
        score: 0
      };
      this.set('displayAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
