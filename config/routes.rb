ButterflyCatcher::Application.routes.draw do
  root 'game#new'
  resources :butterflies, only: [:new]
end
