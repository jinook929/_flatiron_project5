class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :games

  has_many :games
end
