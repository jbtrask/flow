class Shape < ActiveRecord::Base
  
  has_many :children, :class_name => "Shape", :foreign_key => "parent_id"
  belongs_to :diagram
  belongs_to :parent, :class_name => "Shape", :foreign_key => "parent_id"
  belongs_to :type, :class_name => "ShapeType", :foreign_key => "type_id"
  
end
