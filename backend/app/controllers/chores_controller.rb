class ChoresController < ApplicationController
    
    skip_before_action :verify_authenticity_token
    
    def index
        @chores = Chore.all 
        render json: @chores
    end

    def create
        @chore  = Chore.create(chore_params)
    end
    
    private

    def chore_params
        params.permit(:name, :pay, :family_id)
    end

end
