# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Family.destroy_all
Wallet.destroy_all
Chore.destroy_all
Reward.destroy_all
CreditLine.destroy_all
CreditScore.destroy_all




#families

f1 = Family.create(family_pin: 'test123')
f2 = Family.create(family_pin: 'test456')


# Users (parents/children)

p1 = User.create(firstname: 'Mitchell', lastname: 'Alton', username: 'parent1', email: 'mitchell.alton@live.com', family_id: f1.id, role: 0, password: 'test123', password_confirmation: 'test123')
p2 = User.create(firstname: 'Leasette', lastname: 'Alton', username: 'parent2', email: 'leasette@test.com', family_id: f2.id, role: 0, password: 'test123', password_confirmation: 'test123')

c1 = User.create(firstname: 'Gracen', lastname: 'Alton', username: 'child1', email: 'gracen@test.com', family_id: f1.id, role: 1, password: 'test123', password_confirmation: 'test123')
c2 = User.create(firstname: 'Airah', lastname: 'Casey', username: 'child2', email: 'airah@test.com', family_id: f2.id, role: 1, password: 'test123', password_confirmation: 'test123')

# Wallets

Wallet.create(amount: 0, user_id: c1.id)
Wallet.create(amount: 0, user_id: c2.id)

# Credit Lines

CreditLine.create(amount: 500, user_id: c1.id)
CreditLine.create(amount: 500, user_id: c2.id)

# Credit Scores

CreditScore.create(score: 800, user_id: c1.id)
CreditScore.create(score: 800, user_id: c2.id)

# Rewards

Reward.create(name: "Sleep Over", description: "Use your credits to have a friend over for a sleep over.", price: 75, family_id: f1.id)
Reward.create(name: "New Video Game", description: "Use your credits to purchase a new video game. (Approval of game contigent. Discalimer: If not approved you will be refunded for your purchase in full.)", price: 250, family_id: p1.id)
Reward.create(name: "Dessert", description: "Use your credits to have dessert and you get to choose what is for dessert.", price: 30, family_id: f1.id)
Reward.create(name: "Outing", description: "Use your credits to got to the zoo, restaurant, or some place of your choice.", price: 150, family_id: f1.id)
Reward.create(name: "Bonus Screen Time", description: "Use your credits to get more time on video games, watching movies, etc.", price: 25, family_id: f1.id)

Reward.create(name: "Sleep Over", description: "Use your credits to have a friend over for a sleep over.", price: 75, family_id: f2.id)
Reward.create(name: "New Video Game", description: "Use your credits to purchase a new video game. (Approval of game contigent. Discalimer: If not approved you will be refunded for your purchase in full.)", price: 250, family_id: f2.id)
Reward.create(name: "Dessert", description: "Use your credits to have dessert and you get to choose what is for dessert.", price: 30, family_id: f2.id)
Reward.create(name: "Outing", description: "Use your credits to got to the zoo, restaurant, or some place of your choice.", price: 150, family_id: f2.id)
Reward.create(name: "Bonus Screen Time", description: "Use your credits to get more time on video games, watching movies, etc.", price: 25, family_id: f2.id)

# Chores

Chore.create(name: "Clean the Kitchen", pay: 20, family_id: f1.id)
Chore.create(name: "Clean the Bathroom", pay: 25, family_id: f1.id)
Chore.create(name: "Sweep the Floors", pay: 15, family_id: p1.id)
Chore.create(name: "Mow the lawn", pay: 30, family_id: f1.id)
Chore.create(name: "Fold laundry", pay: 20, family_id: f1.id)
Chore.create(name: "Vaccum the carpets", pay: 15, family_id: f1.id)
Chore.create(name: "Power wash windows", pay: 100, family_id: f1.id)

Chore.create(name: "Clean the Kitchen", pay: 20, family_id: f2.id)
Chore.create(name: "Clean the Bathroom", pay: 25, family_id: f2.id)
Chore.create(name: "Sweep the Floors", pay: 15, family_id: f2.id)
Chore.create(name: "Mow the lawn", pay: 30, family_id: f2.id)
Chore.create(name: "Fold laundry", pay: 20, family_id: f2.id)
Chore.create(name: "Vaccum the carpets", pay: 15, family_id: f2.id)
Chore.create(name: "Power wash windows", pay: 100, family_id: f2.id)






