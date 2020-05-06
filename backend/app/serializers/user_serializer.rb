class UserSerializer < ActiveModel::Serializer
  attributes :firstname, :lastname, :family_id, :role, :email, :username
end
