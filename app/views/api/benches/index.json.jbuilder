@benches.each do |bench|
  first_bench_photo = bench.photos[0]
  json.set! bench.id do
    json.partial! 'bench', bench: bench
    json.reviewIds []
    json.pictures [url_for(first_bench_photo)]
  end
end