class ShapeTypesController < ApplicationController
  # GET /shape_types
  # GET /shape_types.xml
  def index
    @shape_types = ShapeType.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @shape_types }
    end
  end

  # GET /shape_types/1
  # GET /shape_types/1.xml
  def show
    @shape_type = ShapeType.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @shape_type }
    end
  end

  # GET /shape_types/new
  # GET /shape_types/new.xml
  def new
    @shape_type = ShapeType.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @shape_type }
    end
  end

  # GET /shape_types/1/edit
  def edit
    @shape_type = ShapeType.find(params[:id])
  end

  # POST /shape_types
  # POST /shape_types.xml
  def create
    @shape_type = ShapeType.new(params[:shape_type])

    respond_to do |format|
      if @shape_type.save
        format.html { redirect_to(@shape_type, :notice => 'Shape type was successfully created.') }
        format.xml  { render :xml => @shape_type, :status => :created, :location => @shape_type }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @shape_type.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /shape_types/1
  # PUT /shape_types/1.xml
  def update
    @shape_type = ShapeType.find(params[:id])

    respond_to do |format|
      if @shape_type.update_attributes(params[:shape_type])
        format.html { redirect_to(@shape_type, :notice => 'Shape type was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @shape_type.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /shape_types/1
  # DELETE /shape_types/1.xml
  def destroy
    @shape_type = ShapeType.find(params[:id])
    @shape_type.destroy

    respond_to do |format|
      format.html { redirect_to(shape_types_url) }
      format.xml  { head :ok }
    end
  end
end
