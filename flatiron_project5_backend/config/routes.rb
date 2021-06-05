Rails.application.routes.draw do
  resources :games, only: [:index, :create]
  get '/high-scores', to: 'games#high_scores'
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :create]
  post '/login', to: 'sessions#create'
  delete '/logout/:id', to: 'sessions#destroy'
  # delete '/logout/:id', to: 'sessions#destroy'
end
