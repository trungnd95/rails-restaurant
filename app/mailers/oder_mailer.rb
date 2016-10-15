class OderMailer < ApplicationMailer
  def send_order_info order
    @order =  order
    mail to: @order.email, subject: "[Trung Manucian Restaurant] Order Information Confirm"
  end
end
