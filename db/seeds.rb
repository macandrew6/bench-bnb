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
  description: 'pojo\'s house',
  seating: 4
})

bench2 = Bench.create!({
  lng: -122.437784, 
  lat: 37.790182, 
  description: 'walter whites van',
  seating: 4
})

bench3 = Bench.create!({
  lng: -122.451116, 
  lat: 37.763076, 
  description: 'cool bench',
  seating: 2
})

POJO_IMGS = [
  'app/assets/images/pojo_img1.jpg',
  'app/assets/images/pojo_img2.jpg',
  'app/assets/images/pojo_img3.jpg',
  'app/assets/images/pojo_img4.jpg'
]

WALTER_IMGS = [
  'app/assets/images/walter_img1.jpg',
  'app/assets/images/walter_img2.jpg',
  'app/assets/images/walter_img3.jpg',
  'app/assets/images/walter_img4.jpg',
]

COOL_IMGS = [
  'app/assets/images/cool1.jpg',
  'app/assets/images/cool2.jpg',
  'app/assets/images/cool3.jpg',
  'app/assets/images/cool4.jpg',
  'app/assets/images/cool5.jpg',
  'app/assets/images/cool6.jpg',
]

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