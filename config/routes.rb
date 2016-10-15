Rails.application.routes.draw do
  get 'comments/create'

  root 'food_items#index'
  resources :food_items do
    resources :orders, only: [:new, :create, :show]
  end
  resources :comments, only: [:create]
end
