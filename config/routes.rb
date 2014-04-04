ButterflyCatcher::Application.routes.draw do
  root 'game#new'
  resources :butterflies
  resources :game, only: [:new]
end
