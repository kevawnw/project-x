Rails.application.routes.draw do
  resources :shopping_lists, only: [:create, :update, :destroy, :index, :show]
  resources :shopping_list_items, only: [:create, :destroy, :index, :show]
  resources :items, only: [:create, :update, :index, :show]
  resources :users, only: [:create, :index, :show]

  resources :users do
    resources :shopping_lists do 
      resources :shopping_list_items
    end
  end

  resources :items do
    resources :shopping_list_items
  end
  post '/find_items', to: "items#find_items"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  get '/cart', to: "sessions#cart"
  post '/set_list', to: "shopping_list_items#set_list"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
