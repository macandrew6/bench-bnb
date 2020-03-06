class Api::ReviewsController < ApplicationController
  before_action :require_logged_in
  
  def create
    @review = current_user.reviews.new(review_params)

    if @review
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  private

  def review_params
    debugger
    params.require(:reviews).permit(:rating, :body, :bench_id)
  end
end
