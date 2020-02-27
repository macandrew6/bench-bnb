# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.create!({
  lng: -122.432813, 
  lat: 37.795741, 
  description: 'random beige house brown trim'
})

Bench.create!({
  lng: -122.437784, 
  lat: 37.790182, 
  description: 'clay st house next to park'
})

Bench.create!({
  lng: -122.451116, 
  lat: 37.763076, 
  description: 'house next to a school'
})