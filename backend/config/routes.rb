Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users
  resources :families
  resources :rewards
  resources :chores
  resources :credit_lines
  resources :credit_scores
  resources :wallets

  post '/user_signup', to: 'users#signup'
  post '/login', to: 'users#login'
  


end
