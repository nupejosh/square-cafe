require 'bundler/setup'

Bundler.require

get '/' do
  erb :index
end

post '/shop' do
  'Thanks for your order'
end