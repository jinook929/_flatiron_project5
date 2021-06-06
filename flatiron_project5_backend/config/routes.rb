Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :create, :show]
  resources :games, only: [:index, :create]
  get '/high-scores', to: 'games#high_scores'
  post '/login', to: 'sessions#create'
  delete '/logout/:id', to: 'sessions#destroy'
end
