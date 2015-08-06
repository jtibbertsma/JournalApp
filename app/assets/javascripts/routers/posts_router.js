JournalApp.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "": "postIndex",
    "posts/": "postIndex",
    "posts/new": "postNew",
    "posts/:id/edit": "postEdit",
    // "posts/:id/delete": "root",
    "posts/:id": "postShow"
  },

  initialize: function (options) {
    this.collection = new JournalApp.Collections.Posts();
    this.collection.fetch();
    this.$rootEl = options.$rootEl;
    this.postIndex();
  },

  postIndex: function(){
    var view = new JournalApp.Views.PostsIndex({collection: this.collection});
    this.swap();
    this.$rootEl.empty();
    $(".sidebar").html(view.render().$el);
  },

  postShow: function(id){
    var model = this.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostShow({model: model});
    this.swap(view);
    this.$rootEl.html(this.currentView.render().$el);
  },

  postEdit: function (id) {
    var model = this.collection.getOrFetch(id);
    var view = new JournalApp.Views.PostForm({model: model, collection: this.collection});
    this.swap(view);
    this.$rootEl.html(this.currentView.render().$el);
  },

  postNew: function () {
    // console.log("here")
    var model = new JournalApp.Models.Post();
    var view = new JournalApp.Views.PostForm({model: model, collection: this.collection})
    // this.collection().add(model);
    this.swap(view);
    this.$rootEl.html(this.currentView.render().$el);
  },

  swap: function(view) {
    if(this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
  }


});
