class GameSerializer < ActiveModel::Serializer
  attributes :id, :score, :memo, :created_at, :user

  belongs_to :user
end
