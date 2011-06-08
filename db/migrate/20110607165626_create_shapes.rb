class CreateShapes < ActiveRecord::Migration
  def self.up
    create_table :shapes do |t|
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.integer :diagram_id
      t.integer :parent_id

      t.timestamps
    end
  end

  def self.down
    drop_table :shapes
  end
end
