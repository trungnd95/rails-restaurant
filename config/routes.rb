Rails.application.routes.draw do
  get 'comments/create'

  root 'food_items#index'
  resources :food_items
  resources :comments, only: [:create]
end
