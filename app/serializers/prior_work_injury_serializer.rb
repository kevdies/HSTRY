class PriorWorkInjurySerializer < ActiveModel::Serializer
  attributes :id, :prior_work_injuries, :prior_work_injury_claims, :claims_settled, :resulting_restrictions, :prior_recovery
end
