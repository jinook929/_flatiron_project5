Rails.application.routes.draw do
  resources :games
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :create, :show]
  post '/login', to: 'sessions#create'
  delete '/logout/:id', to: 'sessions#destroy'
  # delete '/logout/:id', to: 'sessions#destroy'
end
