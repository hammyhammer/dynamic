class AddDescriptionToMovements < ActiveRecord::Migration[7.0]
  def change
    add_column :movements, :description, :string
  end
end
