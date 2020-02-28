class Api::BenchesController < ApplicationController
  before_action :require_logged_in, only: [:create]
  
  def create
    @bench = Bench.create!(bench_params)
    render :show
  end
  
  def index
    @benches = bounds ? Bench.in_bounds(bounds) : Bench.all

    if params[:min_seating] && params[:max_seating]
      @benches = @benches.where(seating: seating_range)
    end
    
    render :index
  end

  def show
    @bench = Bench.find(params[:id])
  end

  private
  def seating_range
    (params[:min_seating]..params[:max_seating])
  end

  def bench_params
    params.require(:bench).permit(
      :lat,
      :lng,
      :description,
      :seating
    )
  end

  def bounds
    params[:bounds]
  end
end
