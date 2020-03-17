json.extract! bench, :id, :description, :lat, :lng, :seating
pictures = []
bench.photos.each do |photo|
  pictures << image_url(photo)
end
json.pictures pictures