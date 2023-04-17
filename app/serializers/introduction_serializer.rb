class IntroductionSerializer < ActiveModel::Serializer
  attributes :id, :applicant_name, :applicant_body_part, :applicant_date_of_injury, :historian
end
