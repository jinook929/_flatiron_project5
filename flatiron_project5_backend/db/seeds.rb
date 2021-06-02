# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "user@users.com", password: "123")
User.create(email: "abc@users.com", password: "123")

Game.create(score: 8, memo: "Way to go!", user_id: 1)
Game.create(score: 11, memo: "Yeah~", user_id: 1)
Game.create(score: 5, memo: "T.T", user_id: 1)
Game.create(score: 3, memo: "hm...", user_id: 2)
Game.create(score: 7, memo: "better~", user_id: 2)
Game.create(score: 12, memo: "FTW!!!", user_id: 2)