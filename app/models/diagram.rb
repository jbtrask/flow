class Diagram < ActiveRecord::Base
  
  has_many :shapes, :inverse_of => :diagram, :autosave => true
  
end
