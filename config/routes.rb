ButterflyCatcher::Application.routes.draw do
  root 'games#create'
  
  # POST /games/:id/butterflies
  # PUT /butterflies/:id
  resources :games, except: [:index] do
    resources :butterflies, shallow: true
  end
end
