class PriorWorkHistorySerializer < ActiveModel::Serializer
  attributes :id, :denies_history, :prior_company_name, :prior_company_begin_date, :prior_company_end_date, :prior_company_job_description, :prior_company_exposure, :prior_company_physical_activities
end
