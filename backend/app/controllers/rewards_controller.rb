class RewardsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @rewards  = Reward.all
        render json: @rewards
    end

    def create
        # byebug
        @reward = Reward.create(reward_params)
      
    end

    private

    def reward_params
        params.permit(:name, :description, :price, :family_id)
    end
    
end
