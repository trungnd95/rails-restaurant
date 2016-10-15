class FoodItemsController < ApplicationController
  before_action :find_food_item, only: [:show, :edit, :destroy]

  def index
    @sections_map = Section.all.map{|section| [section.name, section.id]}
    @food_items = FoodItem.includes([:section, :orders]).all
  end

  def create
    @food_item = FoodItem.new food_item_params
    respond_to do |format|
      if @food_item.save
        format.html do
          flash[:success] = "FoodItem was created successfully!"
          redirect_to root_path
        end
        format.json{render json: @food_item, status: :created}
      else
        format.html do
          flashp[:error] = "Some thing went wrong!"
          redirect :back
        end
        format.json{render json: @food_item.errors, status: :unprocessable}
      end
    end
  end

  def show
    @comment =  @food_item.comments.new
    if @food_item.comments.count == 0
      @average_rating =  0
    else
      @average_rating = @food_item.comments.average(:rating).round(2)
    end
  end

  private
  def food_item_params
    params.require(:food_item).permit(:name, :description, :price, :image_url, :section_id)
  end

  def find_food_item
    @food_item =  FoodItem.includes([:section, :orders, :comments]).find_by id: params[:id]
  end
end
