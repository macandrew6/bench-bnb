class Api::BenchesController < ApplicationController
  before_action :require_logged_in, only: [:create]
  
  def create

  end
  
  def index
    
  end

  private

  def bench_params
    params.require(:bench).permit(
      :lat,
      :lng,
      :description
    )
  end
end
