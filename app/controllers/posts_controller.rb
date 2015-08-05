class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy();
    render :index
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors
    end
  end

  private

  def post_params
    params.require("post").permit("title", "body")
  end
end
