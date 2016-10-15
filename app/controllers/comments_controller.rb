class CommentsController < ApplicationController
  def create
    @comment = Comment.new comment_params
    respond_to do |format|
      if @comment.save
        format.json{render json: @comment, status: :created}
      else
        format.json{render json: @comment.errors, status: :unprocessable}
      end
    end

  end

  private
  def comment_params
    params.require(:comment).permit :rating, :body, :food_item_id
  end
end
