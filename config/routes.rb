Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  root 'users#index'

  get '/login' => 'sessions#new'
  post "/login" => 'sessions#create'
  delete "/logout" => 'sessions#destroy'

  resources :users do

  get '/get_jobthings' => 'users#get_jobthings'

    resources :jobthings do
      resources :notes
      resources :contacts
      resources :applieds
      resources :interviews
      resources :miscjobthings
      resources :outcomes
      get '/destroy_applied' => 'jobthings#destroy_applied'
      get '/destroy_interviews' => 'jobthings#destroy_interviews'
      get '/destroy_miscs' => 'jobthings#destroy_miscs'
      get '/destroy_outcome' => 'jobthings#destroy_outcome'
    end

  end
end
