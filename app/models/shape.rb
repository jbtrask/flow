class Shape < ActiveRecord::Base
  
  belongs_to :diagram
  belongs_to :parent, :class_name => "Shape", :foreign_key => "parent_id"
  
end
