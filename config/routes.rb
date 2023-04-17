Rails.application.routes.draw do
  
  resources :job_descriptions
  resources :social_histories
  resources :allergies
  resources :medications
  resources :surgical_histories
  resources :family_med_histories
  resources :past_med_histories
  resources :prior_non_work_injuries
  resources :prior_work_injuries
  resources :current_complaints
  resources :subsequent_injuries
  resources :current_work_statuses
  resources :injuries
  resources :prior_work_histories
  resources :identifying_data
  resources :introductions
  resources :cases
  resources :lawyers
  resources :adjusters
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
