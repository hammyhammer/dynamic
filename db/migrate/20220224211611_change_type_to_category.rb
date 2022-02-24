class ChangeTypeToCategory < ActiveRecord::Migration[7.0]
  def change
    remove_column :movements, :type
    add_column :movements, :category, :string
  end
end
