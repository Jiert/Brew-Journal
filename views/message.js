var _ = require('underscore'),
    // app = require('../namespace'),
    Backbone = require('backbone'),
    template = require('../templates/message.hbs');

module.exports = Backbone.View.extend({

  initialize: function(options){
    // this.user = options.user;
  },

  teardown: function(){
    console.log('message teardown')
  },

  render: function(){
    // TODO: Why on earth isn't app defined here?
    var userName = app.user && app.user.get('userName'),
        authorClass = this.model.get('author') === userName ? 'primary' : 'success';

    this.$el.html(template({
      model: this.model.toJSON(),
      authorClass: authorClass
    }));
    return this;
  }
});