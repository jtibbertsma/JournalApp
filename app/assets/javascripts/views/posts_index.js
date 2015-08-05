JournalApp.Views.PostsIndex = Backbone.View.extend({

  // template: JST["postIndex"],
  tagName: "ul",

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "reset", this.reset);
  },

  reset: function() {
    this.collection.fetch({reset: true});
  },

  render: function(){
    this.$el.empty();
    this.collection.each(function (post) {
      var view = new JournalApp.Views.PostIndexItem({model: post});
      this.$el.append(view.render().$el);
    }.bind(this))
    return this;
  }
});
