Rails.application.routes.draw do
  resources :users

  
  
  resources :movements do
    resources :notes
  end

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

  get '/notes', to: 'notes#get_all_notes'
  get '/users/:user_id/notes', to: 'notes#get_user_notes' 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html


  # Defines the root path route ("/")
  # root "articles#index"


end
