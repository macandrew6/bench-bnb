class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Noone has signed in"], status: 404
    end
    # eliminate session token
    # Render an empty {} upon successful logout.
    # Render a 404 message if there is no current_user to logout.
  end
end
