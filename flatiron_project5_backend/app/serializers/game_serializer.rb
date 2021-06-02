class GameSerializer < ActiveModel::Serializer
  attributes :id, :score, :memo, :user_id, :created_at

  belongs_to :user
end
