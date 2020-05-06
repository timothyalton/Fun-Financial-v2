class Family < ApplicationRecord
    has_many :users
    has_many :rewards
    has_many :chores

    # validates :family_pin, uniqueness: true
end
