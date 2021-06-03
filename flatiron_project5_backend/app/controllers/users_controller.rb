class UsersController < ApplicationController
  skip_before_action :authorized, only: [:index, :create]

  def index
    users = User.all
    render json: users
  end

  def create
    if(params[:user][:email].match(/.+@.+\..+/))
      user = User.create(user_params)
      if user.valid?
        token = encode_token(user_id: user.id)
        render json: { user: UserSerializer.new(user), jwt: token }, status: :created
      else
        render json: { user: {message: 'This email is already registered...'} }, status: :not_acceptable
      end
    else
      render json: { user: {message: 'Failed to create user...'} }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
