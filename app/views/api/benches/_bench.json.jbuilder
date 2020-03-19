json.extract! bench, :id, :description, :lat, :lng, :seating, :average_rating
pictures = []
bench.photos.each do |photo|
  pictures << url_for(photo)
end
json.pictures pictures