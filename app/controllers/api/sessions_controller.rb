class Api::SessionsController < ApplicationController
  def create
  end

  def destroy
    # eliminate session token
    # Render an empty {} upon successful logout.
    # Render a 404 message if there is no current_user to logout.
  end
end
