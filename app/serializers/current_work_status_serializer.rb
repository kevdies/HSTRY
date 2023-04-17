class CurrentWorkStatusSerializer < ActiveModel::Serializer
  attributes :id, :current_work_status, :still_employed_by, :current_disability_benefits
end
