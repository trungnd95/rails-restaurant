Rails.application.routes.draw do
  root 'food_items#index'
  resources :food_items
end
