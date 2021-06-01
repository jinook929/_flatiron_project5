class User < ApplicationRecord
  has_secure_password
  has_many :games
  
  validates_presence_of :email, :password_digest
  validates :email, uniqueness: { case_sensitive: false }
end
