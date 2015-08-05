JournalApp.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "": "postIndex",
    "posts/:id": "postShow",
    "posts/": "postIndex",
    "posts/:id/edit": "postEdit",
    "posts/new": "postNew"
  },

  postIndex: function(){
    this.collection().fetch();
    var view = new JournalApp.Views.PostsIndex({collection: this._collection});
    this.swap(view);
  },

  postShow: function(id){
    var model = this.collection().getOrFetch(id);
    var view = new JournalApp.Views.PostShow({model: model});
    this.swap(view);
  },

  postEdit: function (id) {
    var model = this.collection().getOrFetch(id);
    var view = new JournalApp.Views.PostForm({model: model});
    this.swap(view);
  },

  postNew: function () {
    var model = new JournalApp.Models.Post();
    this.collection()
    var view = new JournalApp.Views.PostForm({model: model, collection: this._collection})
    // this.collection().add(model);
    this.swap(view);
  },

  collection: function () {
    if (!this._collection) {
      this._collection = new JournalApp.Collections.Posts();
    }
    return this._collection;
  },

  swap: function(view) {
    if(this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    $(".main").html(this.currentView.render().$el);
  }

});
