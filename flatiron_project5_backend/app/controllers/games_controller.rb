class GamesController < ApplicationController
  skip_before_action :authorized, only: [:index, :high_scores]

  def index
    games = Game.all
    render json: games
  end

  def high_scores
    games = Game.order(score: :desc)
    render json: games
  end
end
