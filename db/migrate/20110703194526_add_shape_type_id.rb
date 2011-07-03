class AddShapeTypeId < ActiveRecord::Migration
  def self.up
    change_table :shapes do |t|
      t.integer :type_id
    end
  end

  def self.down
    change_table :shapes do |t|
      t.remove :type_id
    end
  end
end
