ButterflyCatcher::Application.routes.draw do
  root 'game#new'
  resources :butterflies, only: [:index, :new]
  resources :game, only: [:index]
end
