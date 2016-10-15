class OrdersController < ApplicationController
  before_action :get_food

  def new
    @order =  @food_item.orders.new
  end

  def create
    @order =  @food_item.orders.new order_params
    respond_to do |format|
      if @order.save
        format.html  do
          OderMailer.send_order_info(@order).deliver
          redirect_to food_item_order_path(@food_item, @order)
        end
      else
        format.html{render action: :new}
      end
    end
  end

  def show
  end

  private
  def order_params
    params.require(:order).permit :name, :phone, :address, :number_of_foot_items, :food_item_id, :email
  end

  def get_food
    @food_item =  FoodItem.includes(:orders).find_by id: params[:food_item_id]
  end
end
