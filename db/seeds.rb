# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.create!({
  lat: -122.432813, 
  lng: 37.795741, 
  description: 'random beige house brown trim'
})

Bench.create!({
  lat: -122.437784, 
  lng: 37.790182, 
  description: 'clay st house next to park'
})

Bench.create!({
  lat: -122.451116, 
  lng: 37.763076, 
  description: 'house next to a school'
})