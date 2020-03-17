# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

Bench.delete_all
User.delete_all
Review.destroy_all

bench1 = Bench.create!({
  lng: -122.432813, 
  lat: 37.795741, 
  description: 'pojo\'s house'
})

bench2 = Bench.create!({
  lng: -122.437784, 
  lat: 37.790182, 
  description: 'walter whites van'
})

bench3 = Bench.create!({
  lng: -122.451116, 
  lat: 37.763076, 
  description: 'cool bench'
})

POJO_IMGS = [
  'app/assets/images/pojo_img1.jpg',
  'app/assets/images/pojo_img2.jpg',
  'app/assets/images/pojo_img3.jpg',
  'app/assets/images/pojo_img4.jpg'
]

# POJO_IMGS = [
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/67gcsU2rQoZhUimQqVQrzqaV",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/7UYWzG3YEAmbc14uKHSXky1j",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/B5Mc5y16GVWJZu4tfa8aCXcv",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/C7fvHRsmaw69Lxd9TBrtRhkx"
# ]

WALTER_IMGS = [
  'app/assets/images/walter_img1.jpg',
  'app/assets/images/walter_img2.jpg',
  'app/assets/images/walter_img3.jpg',
  'app/assets/images/walter_img4.jpg',
]

# WALTER_IMGS = [
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/DR9FwpSYFjHvQh9e8W5rofd6",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/KPoe5xhNTQAQRTpiS44Phwcu",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/QYSHhJowQZFw1rvJgDin3pqP",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/VU4jRb1x6FRJ2trXuFFynBP8"
# ]

COOL_IMGS = [
  'app/assets/images/cool1.jpg',
  'app/assets/images/cool2.jpg',
  'app/assets/images/cool3.jpg',
  'app/assets/images/cool4.jpg',
  'app/assets/images/cool5.jpg',
  'app/assets/images/cool6.jpg',
]

# COOL_IMGS = [
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/WU856MySLfBJYvJsW3SXoSjD",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/ipeWej462ZFiN5eYqRAUT3Km",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/mjVQmBfcQbDGcLpim9BfDBF7",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/mjXKWQuHr4AKUJBUpFfMnFtH",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/qKGYMY9pftkvFTx3JDSQGdxk",
#   "https://amac-bench-bnb-dev.s3-us-west-1.amazonaws.com/wAkFbwLM15z78sVnU9UtUC5h"
# ]

def addPictureToBench(bench_data, picture)
  image = open(picture)
  bench_data.photos.attach(io: image, filename: "#{bench_data.description.split.join}.png")
end

POJO_IMGS.each do |img|
  addPictureToBench(bench1, img)
end

WALTER_IMGS.each do |img|
  addPictureToBench(bench2, img)
end

COOL_IMGS.each do |img|
  addPictureToBench(bench3, img)
end