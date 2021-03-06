class ShapesController < ApplicationController
  # GET /shapes
  # GET /shapes.xml
  def index
    @shapes = Shape.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @shapes }
    end
  end

  # GET /shapes/1
  # GET /shapes/1.xml
  def show
    @shape = Shape.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @shape }
    end
  end

  # GET /shapes/new
  # GET /shapes/new.xml
  def new
    @shape = Shape.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @shape }
    end
  end

  # GET /shapes/1/edit
  def edit
    @shape = Shape.find(params[:id])
  end

  # POST /shapes
  # POST /shapes.xml
  def create
    @shape = Shape.new(params[:shape])

    respond_to do |format|
      if @shape.save
        format.html { redirect_to(@shape, :notice => 'Shape was successfully created.') }
        format.xml  { render :xml => @shape, :status => :created, :location => @shape }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @shape.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /shapes/1
  # PUT /shapes/1.xml
  def update
    @shape = Shape.find(params[:id])
    @shape.x = params[:x] unless params[:x].nil?
    @shape.y = params[:y] unless params[:y].nil?
    @shape.width = params[:width] unless params[:width].nil?
    @shape.height = params[:height] unless params[:height].nil?
    params[:parent].nil? ? @shape.parent = nil : @shape.parent = Shape.find(params[:parent])
    @shape.save!
    respond_to do |format|
      format.json  { render :json => Shape.find(@shape.id) }
    end
  end

  # DELETE /shapes/1
  # DELETE /shapes/1.xml
  def destroy
    @shape = Shape.find(params[:id])
    @shape.destroy

    respond_to do |format|
      format.html { redirect_to(shapes_url) }
      format.xml  { head :ok }
    end
  end
end
