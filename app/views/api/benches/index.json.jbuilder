@benches.each do |bench|
  json.set! bench.id do
    json.partial! 'bench', bench: bench
    json.reviewIds []
    json.pictures url_for(bench.photos[0])
  end
end