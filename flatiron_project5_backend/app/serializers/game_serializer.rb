class GameSerializer < ActiveModel::Serializer
  attributes :id, :score, :memo, :user_id
end
