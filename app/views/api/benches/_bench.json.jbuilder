json.extract! bench, :id, :description, :lat, :lng, :seating
pictures = []
bench.photos.each do |photo|
  pictures << url_for(photo)
end
json.pictures pictures