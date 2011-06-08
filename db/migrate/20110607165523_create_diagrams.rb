class CreateDiagrams < ActiveRecord::Migration
  def self.up
    create_table :diagrams do |t|
      t.string :title
      t.date :date

      t.timestamps
    end
  end

  def self.down
    drop_table :diagrams
  end
end
