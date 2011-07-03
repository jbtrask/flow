class ShapeType < ActiveRecord::Base
  
  has_many :shapes
  
  def class_name
    self.name.sub(/[ \.\\\/]/, "_").downcase  
  end
  
end
