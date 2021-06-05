class GamesController < ApplicationController
  skip_before_action :authorized, only: [:index, :create, :high_scores]

  def index
    games = Game.all
    render json: games
  end

  def create
    user = User.find_by(id: params[:userId])
    game = Game.create(score: params[:score], user: user)
    if game.valid?
      render json: {game: GameSerializer.new(game)}, status: :created
    else
      render json: { game: {message: 'Game result could not be saved...'} }, status: :not_acceptable
    end
  end

  def high_scores
    games = Game.order(score: :desc)
    render json: games
  end
end
