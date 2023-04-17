class InjurySerializer < ActiveModel::Serializer
  attributes :id, :at_time_of_injury, :witnessed_by, :reported_to, :offered_treatment, :initial_doctor, :initial_clinic, :initial_date_seen, :initial_imaging, :initial_meds, :initial_treatment, :initial_restrictions, :follow_up_appointment, :follow_up_doctor, :follow_up_treatment, :follow_up_meds, :symptom_relief, :surgeries, :current_doctor, :current_treatment_plans, :ongoing_restrictions_prescribed_by
end
