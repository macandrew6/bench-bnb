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

require 'test_helper'

class BenchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
