ButterflyCatcher::Application.routes.draw do
  root 'game#new'
  resources :butterflies, only: [:index, :new, :update]
  resources :game, only: [:index, :update]
end
