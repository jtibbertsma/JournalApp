JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click a": "backToIndex",
    "click .edit": "renderEdit"
  },

  template: JST["postShow"],

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  },

  backToIndex: function () {
    Backbone.history.navigate("posts/", {trigger: true});
  },

  renderEdit: function() {
    Backbone.history.navigate("posts/" + this.model.id + "/edit", {trigger: true});
  }
});
