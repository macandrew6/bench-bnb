json.extract! bench, :id, :description, :lat, :lng, :seating
pictures = []
bench.photos.each do |photo|
  pictures << image_url(url_for(photo))
end
json.pictures pictures