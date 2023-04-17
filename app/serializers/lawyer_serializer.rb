class LawyerSerializer < ActiveModel::Serializer
  attributes :id, :name, :company, :address1, :address2, :city, :state, :zip
end
