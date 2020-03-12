@benches.each do |bench|
  bench_index_photo = bench.photos[0]
  json.set! bench.id do
    json.partial! 'bench', bench: bench
    json.reviewIds []
    json.pictures [url_for(bench_index_photo)]
  end
end