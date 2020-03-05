# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :string           default(""), not null
#  rating     :integer          not null
#  bench_id   :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :bench
  belongs_to :author,
    class_name: :User
end
