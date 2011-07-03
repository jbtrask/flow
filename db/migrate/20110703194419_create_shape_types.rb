class CreateShapeTypes < ActiveRecord::Migration
  def self.up
    create_table :shape_types do |t|
      t.string :name
      t.boolean :container

      t.timestamps
    end
  end

  def self.down
    drop_table :shape_types
  end
end
