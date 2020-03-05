# == Schema Information
#
# Table name: benches
#
#  id          :bigint           not null, primary key
#  description :string
#  lng         :float
#  lat         :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  seating     :integer          default(2), not null
#

class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    self.where('lat < ?', bounds[:northEast][:lat])
      .where('lat > ?', bounds[:southWest][:lat])
      .where('lng < ?', bounds[:northEast][:lng])
      .where('lng > ?', bounds[:southWest][:lng])
  end
end
