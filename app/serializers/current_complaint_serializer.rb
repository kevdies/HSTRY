class CurrentComplaintSerializer < ActiveModel::Serializer
  attributes :id, :body_part, :good_day_pain_level, :bad_day_pain_level, :pain_sensation, :numbness_or_tingling, :pain_radiating, :pain_worsens, :pain_lessens, :pain_level_timing, :pain_remedies
end
