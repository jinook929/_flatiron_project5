class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    user = User.find_by(email: user_login_params[:email])
    if user && user.authenticate(user_login_params[:password])
      token = encode_token({ user_id: user.id })
      render json: { user: UserSerializer.new(user), jwt: token }, status: :accepted
    else
      render json: { user: {message: 'Invalid username or password'} }, status: :unauthorized
    end
  end

  def destroy
    logout_id = params[:id]
    user = User.find_by(id: logout_id)
    user.destroy
    render json: {message: 'Successfully logged out'}
  end

  private

  def user_login_params
    params.require(:user).permit(:email, :password)
  end
end