class GameSerializer < ActiveModel::Serializer
  attributes :id, :score, :created_at, :user

  belongs_to :user
end
