class CreditScoresController < ApplicationController

    def show
        @credit_score = CreditScore.find(params[:id])
        render json: @credit_score
    end

end
