class IdentifyingDatumSerializer < ActiveModel::Serializer
  attributes :id, :applicant_handedness, :applicant_age, :applicant_height_feet, :applicant_height_inches, :applicant_weight, :applicant_address1, :applicant_address2, :applicant_city, :applicant_state, :applicant_zip, :applicant_date_of_birth, :applicant_body_part, :applicant_date_of_injury, :applicant_employee_title, :applicant_employer
end
