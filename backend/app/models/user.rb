class User < ApplicationRecord
    enum role: [:gaurdian, :child] 

    has_secure_password

    validates :username, uniqueness: { case_sensitive: false }, presence: true
    validates :email, uniqueness: { case_sensitive: false }, presence: true
    validates :firstname, presence: true
    validates :lastname, presence: true 
    validates :password, length: { in: 6..20 }
    validates :password_confirmation, presence: true


    has_one :credit_score
    has_one :credit_line
    has_one :wallet
    #for shits ang giggles
    belongs_to :family
end
