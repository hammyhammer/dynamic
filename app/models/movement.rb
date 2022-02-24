class Movement < ApplicationRecord
  has_many :notes, dependent: :destroy
end
